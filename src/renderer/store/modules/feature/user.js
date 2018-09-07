import Vue from 'vue'
import * as constants from '@/assets/constants'

const state = {
  users: [],
  userLocation: []
}

const mutations = {
  fetchUsers (state, userInfo) {
    state.users = userInfo.users
    state.loginUserName = userInfo.loginUserName
  },
  fetchLocationByUser (state, userLocation) {
    state.userLocation = userLocation
  }

}

const actions = {
  fetchUsers ({ commit }, authInfo) {
    Vue.http.post('/emp/FetchEmpInfo', authInfo.token)
      .then((data) => {
        if (data.ProcessStatus === constants.STATUS_OK) {
          let loginUserName = data.EmpInfo.find(emp => emp.EMP_NO === authInfo.loginEmpNO).DISPLAY_EMP_NM
          commit('fetchUsers', { users: data.EmpInfo, loginUserName: loginUserName })
        }
      })
  },
  fetchLocationByUser ({ commit }, empNo, token) {
    Vue.http.post('/emplocation/FetchAllEmpLocationInfo', empNo, token)
      .then((data) => {
        if (data.ProcessStatus === constants.STATUS_OK) {
          commit('fetchLocationByUser', data.EmpLocation)
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
