//文件上传相关全局属性
import { defineStore } from 'pinia'
import { dataUtils } from '@/utils/dataUtils'

export const usevideouploadstore=defineStore('videouploadstore',{
    state:()=>({
      
    
    // no begin ing succeed fail
    status:'no',
    //记录视频的信息: 大小 时长 上传进度条
    videolist:[]
    }),
    actions:{
        /**
         * 开启文件上传
         * @param {} type 
         */
        uploadstart(){
            // console.log('上传'+type)
            this.status='begin'
           
        },
        /**
         * 文件上传完成
         */
        uploadend(){
            this.ing=false
          
        },
        /**
         * 增加或者删除视频
         */
        changeVideoList(){

        }
    },
    getters:{

    }
})