<template>
    <div class="channelcard">
        <div class="header">
            <router-link class="left" :to="`/channel/${channel.id}?tab=multiple`">
                <div class="img">
                    <img :src="channel.cover" alt="">
                </div>
                <div class="info">
                    <h4>{{ channel.name}}</h4>
                    <div>
                        <span>{{ videocount +'个视频'}}</span>
                        <span>{{ watchcount + '次观看' }}</span>
                    </div>
                </div>
            </router-link>
            <div class="right">
                <button>
                    <span style="margin-right: 5px;">
                        <i class="colourless tianjia"></i>
                    </span>
                    <span>订阅{{subscribeCount }}</span>
                </button>
                <router-link :to="`/channel/${channel.id}?tab=featured`">

                    进入频道

                    <i class="colourless gengduo"></i>


                </router-link>
            </div>
        </div>
        <div class="video">
            <videpcard v-for="index in 5"></videpcard>
        </div>
    </div>
</template>
<script setup>
// #region  引入组件
import videpcard from './videocard.vue'
//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount,defineProps } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
import dataUtils from '@/utils/dataUtils'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion
const {channel}= defineProps({
    channel:Object
})
const videocount=computed(()=>{
    // if()
    
   const count= channel.video_Count

   if(count==0) return mock('@integer(1,100)')+'万';
  
  
   return dataUtils.toWan(count )
    
})
const watchcount=computed(()=>{
    // console.log(channel)
    const count= channel.watchCount
    if(count==0)  return mock('@integer(1,1000)')
    return dataUtils.toWan(count)
})
const subscribeCount=computed(()=>{
    const count= channel.subscribe_Count
    if(count==0)  return mock('@integer(1,1000)')
    return dataUtils.toWan(count )
})
</script>
<style scoped lang="less">
.channelcard {
    width: 100%;
    background-color: #fff;

    .header {

        // background-color: cadetblue;
        width: 100%;
        height: 50px;
        display: flex;
        padding: 0;
        justify-content: space-between;
        margin-bottom: 10px;

        .left {
            height: 100%;
            display: flex;

            .img {
                height: 100%;
                aspect-ratio: 1;

            }

            .info {
                margin-left: 10px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                div>span {
                    margin-right: 10px;
                }
            }
        }

        .right {
            display: flex;
            align-items: center;
            justify-content: space-between;

            button {
                background-color: #fff;
                border: #0aaee0 1px solid;
                display: flex;
                align-items: center;
                padding: 5px 10px;

                span {
                    color: #0aaee0;
                }
            }

            a {
                display: flex;
                align-items: center;
                margin-left: 20px;
                color: #0aaee0;
                padding: 5px 10px;
                background-color: #fff;
                border: #0aaee0 1px solid;




            }
        }
    }

    .video {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 100%;
        gap: 10px;


    }

}
</style>

