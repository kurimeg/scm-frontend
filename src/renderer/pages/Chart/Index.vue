<template>
	<div class="chart-container">
    <header class="chart-header">
      <div class="chart-header__icons-left">
        <img 
          class="icon" 
          src="../../assets/images/search_icon.png"
        >
        <img 
          class="icon" 
          src="../../assets/images/reload.png"
        >
      </div>
      <div class="chart-header__icons-right">
        <button 
          class="logout"		
        >Log out</button>
      </div>
    </header>
    <main class="chart-contents">

    </main>
    <footer class="chart-footer">
			<chart-tab
        v-for="floor in floors" 
        :key="floor.FLOOR_PLACE_DV"
        :floor="floor"
      ></chart-tab>	
    </footer>
		<!-- <div class="tabs">
			<tab
        v-for="floorPlace in floorPlaces" 
        :key="floorPlace.FLOOR_PLACE_DV"
        :floorPlace="floorPlace"
      ></tab>				
		</div> -->
		<!-- <div class="desk-layer">
			<desk></desk>
		</div>
		<div class="seat-layer" >
				<seat 
					v-for="seat in this.seats" 
					:id="seat.SEAT_NO" 
					:key="seat.SEAT_NO" 
					:class="{ 'seatY': !seat.VERTICAL_FLG , 'searched': userPath.length != 0 && seat.SEAT_NO === userPath[0].SEAT_NO }" 			
					:style="{ left: seat.CONTENT_POSITION_X + 'px', top: seat.CONTENT_POSITION_Y + 'px' }"
					:seat="seat" 	
				></seat>
		</div> -->
	</div>
</template>

<script>
import ChartTab from '@/components/ChartTab'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ChartTab
  },
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState('feature/auth', ['token']),
    ...mapState('feature/layout', ['floors'])
  },
  watch: {

  },
  created: function () {
    this.fetchFloors({
      Token: this.token
    })
  },
  updated: function () {

  },
  methods: {
    ...mapActions({
      fetchFloors: 'feature/layout/fetchFloors'
    })
  }
}
</script>

<style scoped>
  .chart-container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .chart-header {
    display: flex;
    padding: 10px;
  }
  .chart-header__icons-left {
    display: flex;
    width: 50%;
    justify-content: flex-start;
  }
  .chart-header__icons-right {
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }
  .chart-contents {
    flex-grow: 1;
  }
  .chart-footer {
    display: flex;
    height: 40px;
    margin: 5px;
  }
  .icon {
    margin: 3px;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
  .icon:active {
    width: 34px;
    height: 34px;
    filter: brightness(98%);
  }
  .logout {
    margin: 3px;
    color: #cccccc;
    height: 20px;
    font-size: 12.6px;
    font-family: 'Century Gothic';
    border: 1px dashed;
    background: none;
    cursor: pointer;
  }
</style>
