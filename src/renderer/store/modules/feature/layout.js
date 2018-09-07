import Vue from 'vue'
import * as constants from '@/assets/constants'

const state = {
  seatsWithUsers: [],
  floors: []
}

const mutations = {
  fetchSeatsWithUsers (state, seatsWithUsers) {
    state.seatsWithUsers = seatsWithUsers
  },
  fetchFloors (state, floors) {
    state.floors = floors
  }
}

const actions = {
  fetchSeatsWithUsers ({ commit }, token) {
    Vue.http.post('/seatwithemp/FetchSeatWithEmpInfo', token)
      .then((data) => {
        if (data.ProcessStatus === constants.STATUS_OK) {
          commit('fetchSeatsWithUsers', data.SeatWithEmpInfo)
        }
      })
  },
  fetchFloors ({ commit }, token) {
    Vue.http.post('/floorplace/FetchAllFloorPlace', token)
      .then((data) => {
        if (data.ProcessStatus === constants.STATUS_OK) {
          commit('fetchFloors', data.FloorPlaces)
        }
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
