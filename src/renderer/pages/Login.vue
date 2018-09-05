<template>
	<div class="login-layer">
		<div class="login-form"  @keyup.enter="onLogin">
			<div class="login-form__label">社員番号</div>
			<input type="text" v-model="empNo" class="login-form__text">
			<div class="login-form__label">パスワード</div>
			<input type="password" v-model="password" class="login-form__text">
			<button type="button" @click="onLogin" class="login-form__button">ログイン</button>
		</div>
	</div>
</template>

<script>
import * as constants from '@/assets/constants'
import { mapActions, mapMutations } from 'vuex'

export default {
  data: function () {
    return {
      empNo: null,
      password: null
    }
  },
  methods: {
    ...mapActions({
      login: 'feature/auth/login',
      guestLogin: 'feature/auth/guestLogin'
    }),
    ...mapMutations({
      showLoading: 'components/loading/showLoading'
    }),
    onLogin: function () {
      this.login({
        EmpNo: this.empNo,
        Password: this.password
      })
    }
  },
  created: function () {
    if (process.env.IS_WEB) {
      this.showLoading(true)
      this.guestLogin({
        authInfo: {
          EmpNo: constants.GUEST_USER_EMP_NO,
          Password: constants.GUEST_USER_PASSWORD
        },
        token: constants.GUEST_USER_TOKEN
      })
    } else if (this.$store.state.auth.isLogged) {
      this.showLoading(true)
      let authInfo = JSON.parse(localStorage.getItem('authInfo'))
      this.login({
        EmpNo: authInfo.EmpNo,
        Password: authInfo.Password
      })
    }
  }
}
</script>

<style scoped>
.login-layer {
	background-image: url("../assets/images/back.jpg");
	background-size: 100%;
	width: 1000px;
	height: 560px;
}
.login-form {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	height: 210px;
	width: 280px;
	border: 3.5px solid #28a1f7;
	border-radius: 10.5px;
	background-color: #d8d8d8;
}
.login-form__label {
	margin-left: 17.5px; 
	margin-top: 14px;
	color: #28a1f7;
	font-size: 14px;
}
.login-form__text {
	margin-left: 21px;
	margin-top: 7px;
	text-indent: 1em;
	font-size: 14px;
	background-color: #ffffff;
	color: #909090;
	width: 231px;
	height: 21px;
	border: 1.4px solid #28a1f7;
	border-radius: 20px;
}
.login-form__button{
	background-color: #28a1f7;
	width: 140px;
	color: #ffffff;
	font-size: 14px;
	border-radius: 15px;
	cursor: pointer;
	margin-top: 31.5px;
	margin-left: 70px;
	border-style: none;
}
</style>
