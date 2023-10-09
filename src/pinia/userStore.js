import { defineStore } from 'pinia'
/**
 * 存储用户状态
 */
export const useUserStore = defineStore('useUserStore', {
    state: () => ({

    }),
    actions: {

    },
    getters: {
        /**
         * 
         * @returns 是否已经1登录
         */
        isLogin(){
            return true;
        }
    }
})