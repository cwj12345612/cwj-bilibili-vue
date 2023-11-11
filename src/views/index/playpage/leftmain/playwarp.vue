<template>
    <div class="left_main_playwarp">
        <div ref="playpage_bofanqi" class="playpage_bofanqi"></div>

        <div class="bottom">
            <div class="videoinfo" >
                <div class="line">
                    <span style="color: #0aaee0;">{{ '???' }}&nbsp;</span>
                    <span>用户正在观看</span>
                </div>
                <span>&nbsp;,&nbsp;</span>
                <div class="danmucount">
                    <span>已装填<span style="color: #0aaee0;">{{ "???" }}</span>条弹幕</span>
                </div>
            </div>

            <div class="root">
                <div class="setting">
                    <i class="colourless shezhi"></i>
                </div>
                <div class="send">
                    <span class="zi">A</span>
                    <div class="input">
                        <input  :disabled="!userStore.isLogin" type="text"
                            :placeholder="userStore.isLogin ? '发个友善的弹幕见证当下' : '需要登录才能发送弹幕'">
                        <div class="liyi">
                            <a href="https://www.bilibili.com/blackboard/help.html#/?qid=f80ff5461cc94a53a24fd1a42ce90fe0"
                                target="_blank">
                                弹幕礼仪
                            </a>
                            <i class="colourless gengduo"></i>
                        </div>
                    </div>
                    <button :disabled="!userStore.isLogin" class="submit" @click.prevent="sendDanmu">
                        {{ userStore.isLogin ? '发送' : '请登录' }}
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>

// #region 引入vue pinia 路由 xgplayer视频播放器
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useUserStore } from '@/pinia/userStore.js'
import { useRoute, useRouter } from 'vue-router'
import Player, { Events } from 'xgplayer';
import Danmu from 'xgplayer/es/plugins/danmu'
const pageconfigStore = usepageconfigStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
import dataUtils from '@/utils/dataUtils'
import { GetVideoListvideos, createVideoRedis, GetDanmuBymoment } from '@/api/danmu'
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'


const mock = (str) => { return Mock.mock(str) }
//#endregion
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

.playpage_bofanqi {
    background-color: black;
    width: 100%;
    height: 100%;
    flex-shrink: 1;

}

.left_main_playwarp .bottom {
    /* padding: 5px 0; */
    height: 50px;
    border: 1px solid #99a299;
    border-top: none;
    box-sizing: border-box;
    width: 100%;
    background-color: #ffffff;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom .videoinfo {
    margin-left: 5px;
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
    flex-grow: 1;
    margin-left: 5px;
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

.send .zi:hover {
    color: #00aeec;
    border-bottom: 2px solid #00aeec;
}

.send .input {

    height: 100%;
    /* background-color: cadetblue; */
    width: 70%;
    display: flex;

}

.send .input input {

    background: none;
    height: 100%;
    border: none;
    /* width: 60%; */
    flex-grow: 1;
    flex-shrink: 1;
}

.send .input input[disabled],
.submit[disabled] {

    cursor: not-allowed;
}

.input .liyi {
    font-size: 13px;
    color: #9499a0;
    cursor: pointer;
    background: none;
    /* / flex-grow: 0; */
    display: flex;
    align-items: center;
    justify-content: center;

}

.input .liyi:hover> {
    color: #00aeec;
}

.submit {
    border: none;
    width: 20%;
    color: #ffffff;
    background-color: #00aeec;
    height: 100%;
}

.submit[disabled] {
    background-color: #61666d;
}

.root .setting i {
    font-size: 35px;

}

.root .setting {
    margin-right: 12px;
    transition: all 0.5s;
}

.root .setting:hover {
    color: #00aeec;
    transform: rotate(90deg);
}
</style>
