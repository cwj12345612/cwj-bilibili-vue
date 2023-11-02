//文件上传相关全局属性
import { defineStore } from 'pinia'
import { dataUtils } from '@/utils/dataUtils'

export const usevideouploadstore=defineStore('videouploadstore',{
    state:()=>({
    // no begin ing succeed fail
    status:'no',
    //记录视频的信息: 大小 时长 上传进度条
    videolist:{}
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
           this.status='succeed'
          this.videolist={}
        },
       
        /**
         * 增加或者删除视频
         */
        changeVideoList(videos){
            console.log("影片塑料"+videos.length)
         const videoNames=   Object.keys(this.videolist);
        const list=  videos.filter(v=>!videoNames.includes(v.name))
        if(list.length==0) return
     
       list.forEach(li=>{
            const name=  li.name
            const msg={
                name:name,
                size:parseInt(li.size /(1024*1024)),
                //上传进度 0-100
                schedule:0,
                //已上传大小
                nowsize:0
            }
            this.videolist[name]=msg
       })
        },
        /**
         * 某个视频上传了1Mb
         * @param {*} videoname 
         */
        uploadvideo(videoname){
        const video= this.videolist[videoname]
        video.nowsize+=1
        if(Math.abs(video.nowsize-video.size)<1||video.nowsize>=video.size){
            video.schedule=100
        }else{
            video.schedule=parseInt((video.nowsize / video.size ) *100)
        }
        }
    },
    getters:{

    }
})