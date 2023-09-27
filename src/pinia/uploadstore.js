//文件上传相关全局属性
import { defineStore } from 'pinia'
import { dataUtils } from '@/utils/dataUtils'

export const useuploadStore=defineStore('uploadStore',{
    state:()=>({
        /**
         * 是否正在上传
         */
        ing:false,
    
    }),
    actions:{
        uploading(){
            console.log('上传up')
            this.ing=true
        },
        uploadend(){
            this.ing=false
        }
    },
    getters:{

    }
})