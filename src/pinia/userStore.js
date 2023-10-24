import { defineStore } from 'pinia'
/**
 * 存储用户状态
 */
export const useUserStore = defineStore('useUserStore', {
    state: () => ({
      user:{
        token: null,
        id: null,
        name: null
      }
    }),
    actions: {
        login(user) {
            // console.log(user)
          this.user.id=user.id
          this.user.name=user.name
          this.user.token=user.token
            // localStorage.setItem('token',user.token)
            sessionStorage.setItem('token',user.token)
            alert("登录成功")
        },
        /**
         * 解决刷新页面状态丢失
         * @param {} user 
         */
        refresh(user){
          this.user.id=user.id
          this.user.name=user.name
          this.user.token=user.token
            // localStorage.setItem('token',user.token)
            sessionStorage.setItem('token',user.token)
        }
    },
    getters: {
        /**
         * 
         * @returns 是否已经登录
         */
        isLogin() {
           if(!this.user.token||!this.user.id||!this.user.name) return false
            return true;
        }
    }
})