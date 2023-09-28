<template>
    <div class="comment_card">

        <div class="img">
            <img src="@/assets/images/头像.png" alt="">
        </div>
        <div class="main">
            <div class="first">
                <div class="up">
                    <span>{{ mock('@cword(4,10)') }}</span>
                    <span>
                        <i :class="`colour ic_userlevel_${mock({'num|1-6':6}).num}`"></i>
                    </span>
                </div>
                <div class="content">
                    {{ mock('@cword(5,30)') }}
                </div>
                <div class="bottom">
                    <span class="time">
                        {{ mock('@datetime()') }}
                    </span>

                    <span>
                        <i class="colourless zan"></i>
                        {{ mock({'num|100-3224':3224}).num }}
                    </span>
                    <span>
                        <i class="colourless cai"></i>
                    </span>
                    <span>回复

                    </span>

                </div>
            </div>
            <ul class="chidren">
                <li v-for="index in mock({'num|3-10':10}).num">
                    <div class="img">
                        <img src="@/assets/images/头像.png" alt="">
                    </div>
                    <div class="main">
                        <div class="content">
                          
                              <span >
                                <span class="zhu">{{ mock('@cword(4,10)') }}</span>
                                <span>
                                    <i :class="`colour ic_userlevel_${mock({'num|1-6':6}).num}`"></i>
                                </span>
                          <span>:</span>

                            <span class="text">
                                {{ mock('@cword(10,100)') }}
                            </span>
                              </span>
                        </div>

                        <div class="bottom">
                            <span class="time">
                                {{ mock('@datetime()') }}
                            </span>

                            <span>
                                <i class="colourless zan"></i>
                                {{mock({'num|100-2453':2453}).num}}
                            </span>
                            <span>
                                <i class="colourless cai"></i>
                            </span>
                            <span>回复</span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.comment_card {
   
    margin-bottom: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-column-gap: 30px;
    grid-template-rows: 100%;
    /* height: 600px; */
    /* background-color: blanchedalmond; */
}
:last-child{
    margin-bottom: 0;
}
.comment_card .img {
    /* background-color: cadetblue; */
    height: 50px;
    width: 60px;

    display: flex;

    justify-content: flex-end;
    align-items: center;
}

.comment_card .img img {
    width: 48px;
    height: 48px;
    border-radius: 50%;

}

.main {
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}

.main .first {

    width: 100%;

    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}

.main .up {

    height: 30px;
    align-items: center;
    display: flex;
    /* background-color: thistle; */
}

.main .up span {

    margin-right: 5px;
}

.main .up i {
    font-size: 25px;
}

.first .content {
    margin: 10px 0;
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #9499a0;
    font-size: 13px;

}

.bottom span {

    margin-right: 20px;
}

.bottom span:not(.time) {
    cursor: pointer;
}

.bottom span:not(.time):hover {
    color: #0aaeec;
}

ul.chidren {
    width: 100%;
    flex-grow: 1;
    /* background-color: thistle; */
}

.chidren li {
    /* background-color: #0aaeec; */
    display: grid;
    width: 100%;
    /* height: 56px; */
    grid-column-gap: 10px;
    grid-template-columns: 40px 1fr;
    margin-bottom: 10px;
}
.chidren li:last-child{
    padding-bottom: 10px;
    margin-bottom: 0px;
    border-bottom: 2px solid #f1f2f3;
}
.chidren li .img {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    /* background-color: teal; */

}

.chidren .img>img {
    width: 24px;
    height: 24px;
}

.chidren .main {
    /* background-color: cadetblue; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.chidren .content {
    margin-bottom: 10px;
    color: #18191c;
    /* background-color: crimson; */
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;

}

.chidren .content .zhu  {
  color: #ff6699;
}
.chidren .content span span{
    margin-right: 5px;
}
</style>
