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
        /**
         * 开启文件上传
         * @param {} type 
         */
        uploadstart(type){
            // console.log('上传'+type)
            this.ing=true
            this.type=type
        },
        /**
         * 文件上传完成
         */
        uploadend(){
            this.ing=false
            this.type=null
        }
    },
    getters:{

    }
})