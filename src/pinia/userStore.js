import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus'
/**
 * 存储用户状态
 */
export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    user: {
      Authorization: sessionStorage.getItem('Authorization'),
      id: sessionStorage.getItem('user') ? JSON.parse('user')?.id : null,
      email: sessionStorage.getItem('user') ? JSON.parse('user')?.email : null
    }
  }),
  actions: {
    login(user) {
      Object.keys(this.user).forEach(key => {
        this.user[key] = user[key]
      })
      this.user.Authorization = user.token
      ElNotification({
        title: '登录成功',
        message: "2023-10-10 21:10:10",
        // position: 'Top-right',
        type: 'success',
        zIndex:10087
      })
    },
    /**
     * 退出登录 清除pinia中的数据
     */
    logout() {
      Object.keys(this.user).forEach(key => {
        this.user[key] = null
      })
    },
    /**
     * 解决刷新页面状态丢失
     * @param {} user 
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
     * 
     * @returns 是否已经登录
     */
    isLogin() {
      if (!this.user || !this.user.Authorization || !this.user.id || !this.user.email) return false
      return true;
    }
  }
})