<template>
	<div class="chart-container">
    <header class="chart-header">
      <div class="chart-header__icons-left">
        <img 
          class="icon" 
          src="../assets/images/search_icon.png" 			
          @click="showSearch"
        >	
        <search v-if="show"></search>
        <img 
          class="icon" 
          src="../assets/images/reload.png" 			
          @click="reload"
        >
      </div>
      <div class="chart-header__icons-right">
        <button 
          class="logout" 
          v-if="!isGuest"
          @click="logout" 			
        >Log out</button>
      </div>
    </header>
    <main class="chart-contents">

    </main>
    <footer class="chart-footer">

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
// import Seat from './Chart/Seat'
// import Search from './Chart/Search'
// import Desk from './Chart/Desk'
// import Tab from './Chart/Tab'
// import * as messages from '@/assets/messages'
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  // components: {
  //   Seat, Desk, Search, Tab
  // },
  // data: function () {
  //   return {
  //     empNo: JSON.parse(localStorage.getItem('authInfo')).EmpNo
  //   }
  // },
  // computed: {
  //   ...mapState('auth', {
  //     token: state => state.token,
  //     isGuest: state => state.isGuest
  //   }),
  //   ...mapState('search', {
  //     show: state => state.show
  //   }),
  //   ...mapState('getMaster', {
  //     floorPlaces: state => state.floorPlaces
  //   }),
  //   ...mapState('getUserPath', {
  //     userPath: state => state.userPath
  //   }),
  //   ...mapGetters({
  //     seats: 'tab/filterSeat'
  //   })
  // },
  // watch: {
  //   userPath: function (path) {
  //     if (path.length !== 0) {
  //       this.setTab(path[0].FLOOR_PLACE_DV)
  //     }
  //   }
  // },
  // created: function () {
  //   this.showLoading(true)
  //   this.firstview({
  //     Token: this.token
  //   })
  //   this.fetchAllFloorPlace({
  //     Token: this.token
  //   })
  //   this.fetchEmpInfo({
  //     token: {
  //       Token: this.token,
  //       EmpNo: ''
  //     },
  //     loginEmpNO: this.empNo
  //   })
  //   this.getIsReserved({
  //     EmpNo: this.empNo,
  //     Token: this.token
  //   })
  //   // 5分でポーリングして初期表示処理を呼び出す
  //   setInterval(() => {
  //     this.firstview({
  //       Token: this.token
  //     })
  //   }, 300000)
  // },
  // updated: function () {
  //   this.showLoading(false)
  // },
  // methods: {
  //   ...mapActions({
  //     firstview: 'getMaster/firstview',
  //     fetchAllFloorPlace: 'getMaster/fetchAllFloorPlace',
  //     fetchEmpInfo: 'getMaster/fetchEmpInfo',
  //     getIsReserved: 'reserve/getIsReserved',
  //     showAlert: 'modal/showAlert'
  //   }),
  //   ...mapMutations({
  //     showSearch: 'search/showSearch',
  //     showLoading: 'loading/showLoading',
  //     setTab: 'tab/setTab'
  //   }),
  //   logout: function () {
  //     this.showAlert({
  //       message: messages.I_005,
  //       actionName: 'auth/logout',
  //       param: {}
  //     })
  //   },
  //   reload: function () {
  //     this.showLoading(true)
  //     this.firstview({
  //       Token: this.token
  //     })
  //   }
  // }
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
  height: 50px;
  margin: 5px;
}
.icon{
  margin: 3px;
	width: 35px;
	height: 35px;
	cursor: pointer;
}
.icon:active{
	width: 34px;
  height: 34px;
	margin-top: 7.9px;
	filter:brightness(98%);
}

.logout{
  margin: 3px;
	color: #cccccc;
  height: 20px;
	font-size: 12.6px;
	font-family: 'Century Gothic';
  border: 1px dashed;
	background: none;
	cursor: pointer;
}
.tabs{
	position:absolute;
	display: flex;
  width: 1400px;
  justify-content:flex-end;
	bottom: 15px;
	z-index: 3;
}
</style>
