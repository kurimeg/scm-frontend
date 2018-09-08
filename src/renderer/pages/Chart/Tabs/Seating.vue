<template>
  <div>
    <div class="seat-layer" >
      <app-seat 
        v-for="seat in seatsWithUsers" 
        :id="seat.SEAT_NO" 
        :key="seat.SEAT_NO" 
        :class="{ 'seatY': !seat.VERTICAL_FLG }" 			
        :style="{ left: seat.CONTENT_POSITION_X + 'px', top: seat.CONTENT_POSITION_Y + 'px' }"
      ></app-seat>
    </div>
    <div class="desk-layer" >
      <app-desk-normal 
        v-for="deskNormal in desksNormal" 
        :id="deskNormal.SEAT_NO" 
        :key="deskNormal.SEAT_NO"		
        :style="{ left: deskNormal.CONTENT_POSITION_X + 'px', top: deskNormal.CONTENT_POSITION_Y + 'px' }"
      ></app-desk-normal>
      <app-desk-free 
        v-for="deskFree in desksFree" 
        :id="deskFree.SEAT_NO" 
        :key="deskFree.SEAT_NO"		
        :style="{ left: deskFree.CONTENT_POSITION_X + 'px', top: deskFree.CONTENT_POSITION_Y + 'px' }"
      ></app-desk-free>
    </div>
  </div>
</template>

<script>
import AppSeat from '@/components/AppSeat'
import AppDeskNormal from '@/components/AppDeskNormal'
import AppDeskFree from '@/components/AppDeskFree'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    AppSeat, AppDeskNormal, AppDeskFree
  },
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState('feature/auth', ['token']),
    ...mapState('feature/layout', ['seatsWithUsers', 'desksNormal', 'desksFree'])
  },
  watch: {

  },
  created: function () {
    this.fetchSeatsWithUsers({
      Token: this.token
    })
    this.fetchDesksNormal({
      Token: this.token
    })
    this.fetchDesksFree({
      Token: this.token
    })
  },
  updated: function () {

  },
  methods: {
    ...mapActions({
      fetchSeatsWithUsers: 'feature/layout/fetchSeatsWithUsers',
      fetchDesksNormal: 'feature/layout/fetchDesksNormal',
      fetchDesksFree: 'feature/layout/fetchDesksFree'
    })
  }
}
</script>

<style scoped>

</style>
