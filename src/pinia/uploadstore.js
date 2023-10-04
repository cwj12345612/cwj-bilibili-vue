//文件上传相关全局属性
import { defineStore } from 'pinia'
import { dataUtils } from '@/utils/dataUtils'

export const useuploadStore=defineStore('uploadStore',{
    state:()=>({
        /**
         * 是否正在上传
         */
        ing:false,
        /**
         * 上传文件类型 
         *      video text audio
         */
    type:null,
    }),
    actions:{
        uploading(type){
            console.log('上传'+type)
            this.ing=true
            this.type=type
        },
        uploadend(){
            this.ing=false
            this.type=null
        }
    },
    getters:{

    }
})