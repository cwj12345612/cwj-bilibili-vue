<template>
    <div class="left_main_playwarp" 
    
    
    >
        <div id="playpage_bofanqi"></div>



        <div class="bottom" 
        
     >
            <div class="videoinfo">
                <div class="line">
                    <span>{{ mock({ 'num|10-456': 456 }).num }}&nbsp;</span>
                    <span>用户正在观看</span>
                </div>
                <span>&nbsp;,&nbsp;</span>
                <div class="danmucount">
                    <span>已装填&nbsp;{{ mock({ 'num|100-34552': 34552 }).num }}&nbsp;条弹幕</span>
                </div>
            </div>

            <div class="root">
                <div class="setting">
                    <i class="colourless shezhi"></i>
                </div>
                <div class="send">
                    <span class="zi">A</span>
                    <div class="input">
                        <input type="text" placeholder="发个友善的弹幕见证当下">
                        <span class="liyi">
                           <span>弹幕礼仪</span>
                            <i class="colourless gengduo"></i>
                        </span>
                    </div>
                    <button class="submit"
                    @click.prevent="change"
                    >
                        发送
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由 xgplayer视频播放器
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
import Player from 'xgplayer';
import Danmu from 'xgplayer/es/plugins/danmu'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'
const videolist=reactive(
    
    [
        'http://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4',
    'http://192.168.88.4:8080/videos/%E3%80%90%E8%93%9D%E5%85%89%E3%80%91%E9%AB%98%E6%A1%A5%E4%BC%98%E3%80%8A%E3%83%A4%E3%82%AD%E3%83%A2%E3%83%81%E3%80%8B%E7%A5%9E%E6%9B%B2MV%E5%AE%8C%E6%95%B4%E7%89%88(%E3%80%8A%E8%B5%B7%E9%A3%8E%E4%BA%86%E3%80%8B%E6%97%A5%E8%AF%AD%E5%8E%9F%E7%89%88).%E9%AB%98%E6%A1%A5%E4%BC%98_-_%E3%83%A4%E3%82%AD%E3%83%A2%E3%83%81(%E8%B5%B7%E9%A3%8E%E4%BA%86%E5%8E%9F%E7%89%88)%E8%B0%83%E6%95%B4.142658529.mp4',
    'http://192.168.88.4:8080/videos/%E3%80%904K60FPS%E3%80%91%E5%9D%82%E4%BA%95%E6%B3%89%E6%B0%B4%E3%80%8A%E6%B8%90%E6%B8%90%E8%A2%AB%E4%BD%A0%E5%90%B8%E5%BC%95%E3%80%8BHires%E7%89%88%E6%9C%AC!%E3%80%8A%E9%BE%99%E7%8F%A0GT%E3%80%8B%E4%B8%BB%E9%A2%98%E6%9B%B2!.%E5%9D%82%E4%BA%95%E6%B3%89%E6%B0%B4_-_%E6%B8%90%E6%B8%90%E8%A2%AB%E4%BD%A0%E5%90%B8%E5%BC%95_%E5%AE%8C%E6%95%B44K%E7%89%88.293621212.mp4',
    'http://192.168.88.4:8080/videos/4K%E6%94%B6%E8%97%8F%E7%BA%A7!%E3%80%8A%E6%9C%AA%E9%97%BB%E8%8A%B1%E5%90%8D%E3%80%8Bsecret_base_~%E5%90%9B%E3%81%8C%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE~_-_Silent_Siren(cove).secret_base_~%E5%90%9B%E3%81%8C%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE~_(10_years_after_Ver.).391932885.mp4',
    'http://192.168.88.4:8080/videos/%E8%B6%85%E5%A5%BD%E5%90%AC%E7%9A%84%E6%97%A5%E8%AF%AD%E6%AD%8C%E3%80%8A%E3%81%82%E3%81%A8%E3%81%B2%E3%81%A8%E3%81%A4%E3%80%8B%E8%87%B4%E9%80%90%E6%A2%A6%E8%B7%AF%E4%B8%8A%E7%9A%84%E6%88%91%E4%BB%AC~.%E6%9C%AA%E5%91%BD%E5%90%8D.347281018.mp4'
]
)
const mock = (str) => { return Mock.mock(str) }

//#endregion

onMounted(() => {
    //#region 
    // let comments = []
    // for (let i = 0; i < 30; i++) {
    //     comments.push(
    //         {
    //             duration: parseInt(mock({ 'num|5000-30000': 30000 }).num),         //弹幕持续显示时间,毫秒(最低为5000毫秒)
    //             id: mock('@word(10)'),               //弹幕id，需唯一
    //             start: parseInt(mock({ 'num|300-70000': 700000 }).num),           //弹幕出现时间, 单位：ms 毫秒
    //             // prior: true,          //该条弹幕优先显示，默认false
    //             // color: true,          //该条弹幕为彩色弹幕，默认false
    //             txt: mock('@cword(5,10)'),              //弹幕文字内容
    //             style: {                 //弹幕自定义样式
    //                 color: mock('@color()'),         //例：'#ff9500',
    //                 fontSize: mock({ 'num|15-27': 27 }).num + 'px',      // 例：'20px',
    //                 padding: '2px 11px'        //例： 2px 11px',
    //             },
    //             mode: 'top',           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll

    //         }
    //     )
    // }
    // console.log(comments.length)
    // comments.forEach(c=>{
    //     console.log(c)
    // })
//#endregion
   new Player({
        id: 'playpage_bofanqi',
        height: '100%',
        width: '100%',
        url:videolist[0]
         })
 
})
const change=()=>{
   let index=parseInt((Math.random()*10))
   index= index<4 ? index :3;
   new Player({
        id: 'playpage_bofanqi',
        height: '100%',
        width: '100%',
        url: videolist[index]
     })
}
</script>
<style scoped>
@import 'xgplayer/dist/index.min.css';
@import 'xgplayer/es/plugins/danmu/index.css';

.left_main_playwarp {
    width: 100%;

    display: flex;
    flex-direction: column;
/* 
:style="pageconfigStore.dynamicWH(undefined, { normal: 422, max: 1009, min: 422 })"
*/
max-height: 1009px;
min-height: 422px;
height: 55vh;
}

#playpage_bofanqi {
    background-color: black;
    width: 100%;
    height: 100%;
    flex-shrink: 1;

}

.left_main_playwarp .bottom {
    height: 50px;
    width: 100%;
    background-color: #ffffff;
    padding-right: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom .videoinfo {
    flex-shrink: 0;
    font-size: 13px;
    /* background-color: palevioletred; */
    display: flex;
    color: #61666d;
}

.bottom .root {
    flex-shrink: 1;
    /* background-color: aquamarine; */
    height: 90%;
    width: 100%;
    display: flex;
   
    align-items: center;
    justify-content: center;
}

.root .send {
    height: 90%;
    border-radius: var(--border-radius-min);
    overflow: hidden;
    width: 90%;
    padding-left: 5px;
    background-color: rgb(241, 242, 243);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.send .zi {
    cursor: pointer;
    border-bottom: 2px solid rgb(97, 102, 109);
    font-size: 20px;
    color: rgb(97, 102, 109);
}
.send .zi:hover{
    color: #00aeec;
    border-bottom: 2px solid #00aeec;
}
.send .input {
    height: 80%;
    /* background-color: cadetblue; */
    width: 70%;
    display: flex;

}
.send .input input{
    background: none;
    height: 100%;
    border: none;
    /* width: 60%; */
    flex-grow: 1;
flex-shrink: 1;
}
.input .liyi{
   
    font-size: 13px;
    color: #9499a0;
   cursor: pointer;
   /* / flex-grow: 0; */
    display: flex;
    align-items: center;
   
}
.input .liyi:hover{
    color: #00aeec;
}
.submit{
    border: none;
    width: 20%;
    color: #ffffff;
    background-color: #00aeec;
    height: 100%;
}
.root .setting i{
    font-size: 35px;
  
}
.root .setting{
    margin-right: 12px;
    transition: all 0.5s;
}
.root .setting:hover {
    color: #00aeec;
    transform: rotate(90deg);
}
</style>
