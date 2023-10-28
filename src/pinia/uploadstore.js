//文件上传相关全局属性
import { defineStore } from 'pinia'
import { dataUtils } from '@/utils/dataUtils'

export const useuploadStore=defineStore('uploadStore',{
    state:()=>({
      
        /**
         * 上传文件类型 
         *      video text audio
         */
    type:null,
    // no begin ing end
    status:'no',
    }),
    actions:{
        /**
         * 开启文件上传
         * @param {} type 
         */
        uploadstart(type){
            // console.log('上传'+type)
            this.status='begin'
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