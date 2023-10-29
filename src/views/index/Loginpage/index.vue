<template>
  <div class="container">
    <form action="#" class="login-form">
      <h2>登 录</h2>
      <input v-model="loginuser.email" type="email" placeholder="邮箱" />
      <input v-model="loginuser.password" type="password" name="password" placeholder="密码" />
      <button type="submit" @click.prevent="login">登录</button>
    </form>
  </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/pinia/userStore.js'
import {login as userlogin} from '@/api/user'
const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
// #endregion

// #region 第三方库

import axios from '@/utils/axios'

// #endregion

// #region  发送请求 
const loginuser = reactive({
  email: '',
  password: '',
})
const login = () => {
  if (loginuser.email.trim() == '' || loginuser.password.trim() == '') {
    alert("游戏和密码都不能为空")
    return
  }
userlogin(loginuser)
}
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>


.container {
  position: absolute;
  z-index: 10086;
 
  transform: translateX(-100%);
  top: 64px;
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0aaee0;
  /* background: url("../../../assets//images/视频图片.png") fixed no-repeat; */
  background-size: cover;
}

.login-form {
  width: 240px;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: center;
  position: relative;
  z-index: 100;
  background: inherit;
  border-radius: 18px;
  overflow: hidden;
  /* 隐藏多余的模糊效果*/
}

.login-form::before {
  content: "";
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  top: -10px;
  left: -10px;
  overflow: hidden;
  background: inherit;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.25);
  filter: blur(6px);
  z-index: -1;
}

.login-form h2 {
  font-size: 18px;
  font-weight: 400;
  color: #3d5245;
}

.login-form input,
.login-form button {
  margin: 6px 0;
  height: 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 0 14px;
  color: #3d5245;
}

.login-form input::placeholder {
  color: #3d5245;
}


.login-form button:focus,
.login-form input:focus {
  outline: 0;
}

.login-form button {
  margin-top: 24px;
  background-color: rgba(57, 88, 69, 0.4);
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s;
}

.login-form button:hover {
  background-color: rgba(12, 80, 38, 0.67);
}
</style>
