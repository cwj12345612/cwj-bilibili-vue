<template>
    <div class="upZhu">
        <a class="profile" href="/">
            <img src="@/assets/images/头像.png" alt="">
        </a>
        <div class="rightdetail">
            <div class="name">
                <a href="#" class="span">{{ mock('@cword(5)') }}</a>
                <a href="#" class="msg">
                    <i class="colourless sixin"></i>
                    <span>发信息</span>
                </a>

            </div>
            <div class="signature">
                {{ mock('@cword(50)') }}
            </div>
            <div class="bottom">
                <button class="cd">
                    <i class="colourless zan"></i>
                    <span>充电</span>
                </button>
                <button class="gz no">
                    <i class="colourless tianjia"></i>
                    <i v-if="false" class="colourless guanlishipin"></i>
                    <span>关注</span>
                    <span>{{ mock({'num|10-33':33}).num+'万' }}</span>
                </button>
            </div>
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
.upZhu {

    width: 100%;
    height: 86px;
    /* background-color: teal; */
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.upZhu .profile {
    flex-shrink: 0;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    /* background-color: palegreen; */
    position: relative;
}

.upZhu .profile img {
    border-radius: 50%;
    cursor: pointer;
}

.upZhu .rightdetail {


    padding-bottom: 10px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* background-color: peru; */
}

.upZhu .rightdetail .name {

    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
}

.upZhu .rightdetail .name .span {
    color: #fb7299;
    margin-right: 10px;
    white-space: nowrap;
    font-size: 15px;
}

.upZhu .rightdetail .name .msg {
    color: #61666d;
    font-size: 13px;
}

.upZhu .rightdetail .signature {
    /* background-color: #fb7299; */
    /* height: 20px; */
    width: 100%;
    font-size: 13px;
    color: #9499a0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.upZhu .rightdetail .bottom{
height: 30px;
width: 100%;
/* background-color: turquoise; */
display: flex;
align-items: center;
justify-content: space-between;
}
.upZhu .rightdetail .bottom button{
    height: 100%;
    border-radius: var(--border-radius-min);
    display: flex;
   align-items: center;
   justify-content: center;
}
.upZhu .rightdetail .bottom .cd{
 background-color: #ffffff;
   width: 40%;
   color: #fb7299;
    border: 1px solid #fb7299;
}
.upZhu .rightdetail .bottom .gz{
  border: none;
    width: 50%;

}
.upZhu .rightdetail .bottom .gz.no{
    color: #ffffff;
    background-color: rgb(0, 174, 236);
}
.upZhu .rightdetail .bottom .gz.yes{
    background-color: rgb(227, 229, 231);
    color: rgb(148, 153, 160);
}
</style>
