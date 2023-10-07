<template>
    <div class="header">
        <select class="visualangle">
            <option value="" selected>
                <span>视角: </span>
                <span>我自己</span>
                <i class="colourless xialada"></i>
            </option>
            <option value="">
                <span>视角: </span>
                <span>粉丝</span>

            </option>
            <option value="">
                <span>视角: </span>
                <span>陌生人</span>

            </option>
        </select>
        <div class="userinfo">
            <div class="img">
                <a href="#">
                    <img src="@/assets/images/头像.png" alt="">
                </a>
            </div>
            <div class="desc">
                <div class="title">
                    <h3>
                        {{ mock('@cword(5)') }}
                    </h3>
                    <span class="class">
                        <i class="colour ic_userlevel_6"></i>
                    </span>
                    <span class="huiyuan">
                        <i class="colourless wodedahuiyuan"></i>
                    </span>
                </div>
                <div class="input">

                    <input type="text" placeholder="编辑个性签名">
                </div>
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
.header {
    width: 100%;
    height: 192px;
    border: 1px solid #e6e7e8;
    background: url('@/assets/images/spacepage/header_bigpic.webp') no-repeat;
    background-size: cover;
    position: relative;
    padding-left: 20px;

}

.visualangle {
    position: absolute;
    top: 15px;
    right: 60px;
    background: var(--transparency);
    color: #fff;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    /* border-radius: 4px; */

}


.visualangle span {
    margin-right: 5px;
}

.userinfo {
    /* background-color: aqua; */
    width: calc(100% - 20px);
    height: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.userinfo .img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-color: burlywood;

}

img {
    border-radius: 50%;
}

.userinfo .desc {

    /* background-color: cadetblue; */

    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.userinfo .desc .title {
    display: flex;

}

.desc .title h3 {
    color: #fff;
    font-size: 18px;
}

.desc .title>* {
    margin-right: 10px;
}

.desc .title i {
    font-size: 30px;
}

.huiyuan i {
    color: rgb(255, 86, 141);
}

.desc .input {
    /* background-color: chocolate; */
    width: 740px;
    height: 26px;
    padding: 0 5px;
    border-radius: 6px;
    overflow: hidden;
}

.desc .input:hover {
    border: 2px solid #fff;
    background: var(--transparency);
}

.desc .input input {
    height: 100%;
    width: 100%;
    background: none;
    border: none;
}

.desc .input input::placeholder {
    color: #e6e7e8;
}</style>
