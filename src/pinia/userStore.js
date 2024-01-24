import { defineStore } from 'pinia'

import { ElNotification } from 'element-plus'
/**
 * 存储用户状态
 */
export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    user: {
      Authorization: sessionStorage.getItem('Authorization'),
      id: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo'))?.id : 1,
      
      email: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo'))?.email : null
    }
  }),
  actions: {
    /**
     * 把登录用户存储在pinia中
     * 
     * @param {object} user 
     */
    login(_user) {
      Object.keys(this.user).forEach(key => {
        this.user[key] = _user[key]
      })
      this.user.Authorization = _user.token
      ElNotification({
        title: '登录成功',
        message: _user.loginTime,
        // position: 'Top-right',
        type: 'success',
        zIndex:10087
      })
    },
    /**
     * 退出登录 清除pinia中的用户数据
     */
    logout() {
      Object.keys(this.user).forEach(key => {
        this.user[key] = null
      })
    },
    /**
     * 解决刷新页面用户登录状态丢失
     * @param {object} user 
     */
    refresh(userinfo) {
      Object.keys(this.user).forEach(key => {
        // console.log('更新'+key)
        this.user[key] = userinfo[key]
      })
      this.user.Authorization = userinfo.token
    }
  },
  getters: {
    /**
     * 根据pinia中的用户数据 判断用户是否已登录
     * @returns 是否已经登录
     */
    isLogin() {
      // if (!this.user || !this.user.Authorization || !this.user.id || !this.user.email) return false
      return true;
    }
  }
})

