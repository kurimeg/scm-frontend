// import Vue from 'vue'
// import * as constants from '@/assets/constants'

const state = {
  seatsWithUsers: [],
  desksNormal: [],
  desksFree: [],
  floors: []
}

const mutations = {
  fetchSeatsWithUsers (state, seatsWithUsers) {
    state.seatsWithUsers = seatsWithUsers
  },
  fetchDesksNormal (state, desksNormal) {
    state.desksNormal = desksNormal
  },
  fetchDesksFree (state, desksFree) {
    state.desksFree = desksFree
  },
  fetchFloors (state, floors) {
    state.floors = floors
  }
}

const actions = {
  fetchSeatsWithUsers ({ commit }, token) {
    // Vue.http.post('/seatwithemp/FetchSeatWithEmpInfo', token)
    //   .then((data) => {
    //     if (data.ProcessStatus === constants.STATUS_OK) {
    //       commit('fetchSeatsWithUsers', data.SeatWithEmpInfo)
    //     }
    //   })
    let seatsWithUsers = [
      { SEAT_NO: 'S001', VERTICAL_FLG: true, CONTENT_POSITION_X: 0, CONTENT_POSITION_Y: 0 },
      { SEAT_NO: 'S001', VERTICAL_FLG: true, CONTENT_POSITION_X: 50, CONTENT_POSITION_Y: 0 },
      { SEAT_NO: 'S001', VERTICAL_FLG: true, CONTENT_POSITION_X: 100, CONTENT_POSITION_Y: 0 }
    ]
    commit('fetchSeatsWithUsers', seatsWithUsers)
  },
  fetchDesksNormal ({ commit }, token) {
    // Vue.http.post('/seatwithemp/FetchSeatWithEmpInfo', token)
    //   .then((data) => {
    //     if (data.ProcessStatus === constants.STATUS_OK) {
    //       commit('fetchSeatsWithUsers', data.SeatWithEmpInfo)
    //     }
    //   })
    let desks = [
      { SEAT_NO: 'DN001', VERTICAL_FLG: true, CONTENT_POSITION_X: 0, CONTENT_POSITION_Y: 0 },
      { SEAT_NO: 'DN002', VERTICAL_FLG: true, CONTENT_POSITION_X: 50, CONTENT_POSITION_Y: 0 },
      { SEAT_NO: 'DN003', VERTICAL_FLG: true, CONTENT_POSITION_X: 100, CONTENT_POSITION_Y: 0 }
    ]
    commit('fetchDesksNormal', desks)
  },
  fetchDesksFree ({ commit }, token) {
    // Vue.http.post('/seatwithemp/FetchSeatWithEmpInfo', token)
    //   .then((data) => {
    //     if (data.ProcessStatus === constants.STATUS_OK) {
    //       commit('fetchSeatsWithUsers', data.SeatWithEmpInfo)
    //     }
    //   })
    let desks = [
      { SEAT_NO: 'DF001', VERTICAL_FLG: true, CONTENT_POSITION_X: 150, CONTENT_POSITION_Y: 0 },
      { SEAT_NO: 'DF002', VERTICAL_FLG: true, CONTENT_POSITION_X: 200, CONTENT_POSITION_Y: 0 },
      { SEAT_NO: 'DF003', VERTICAL_FLG: true, CONTENT_POSITION_X: 250, CONTENT_POSITION_Y: 0 }
    ]
    commit('fetchDesksFree', desks)
  },
  fetchFloors ({ commit }, token) {
    // Vue.http.post('/floorplace/FetchAllFloorPlace', token)
    //   .then((data) => {
    //     if (data.ProcessStatus === constants.STATUS_OK) {
    //       commit('fetchFloors', data.FloorPlaces)
    //     }
    //   })
    let floors = [
      { FLOOR_PLACE_DV: 'F01', FLOOR_PLACE_DV_NM: '新浦安10F（駅側）' },
      { FLOOR_PLACE_DV: 'F02', FLOOR_PLACE_DV_NM: '新浦安10F（海側）' }
    ]
    commit('fetchFloors', floors)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
