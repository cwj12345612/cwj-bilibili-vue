<template>
<div id="moviepage_main_videowarp">
    
</div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由  xgplayer视频播放器

import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
import Player from 'xgplayer';
import Danmu from 'xgplayer/es/plugins/danmu'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion
onMounted(()=>{
    if(document.getElementById('moviepage_main_videowarp')){
       new Player({

        id: 'moviepage_main_videowarp',
        height: '100%',
        width: '100%',
        url: 'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',

    })
 }
})
</script>
<style scoped>
@import 'xgplayer/dist/index.min.css';
@import 'xgplayer/es/plugins/danmu/index.css';
#moviepage_main_videowarp{
/* background-color: cornflowerblue; */
grid-row: span 2;
grid-column: span 3;
border-radius: var(--border-radius-max);
overflow: hidden;
}
</style>
