<template>
    <div class="sendinput">
<h3
v-if="!userStore.isLogin"
class="disabled">
    登录后才能发表评论
    </h3>
        <div
        v-if="userStore.isLogin"
        class="img">
            <img src="@/assets/images/头像.png" alt="">
        </div>
        <div
        v-if="userStore.isLogin"
        class="send">
            <div class="input">
                <input type="text" placeholder="评论千万条，等你发一条">
            </div>
            <button class="submit">
                发布
            </button>
        </div>
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useUserStore} from '@/pinia/userStore.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const userStore=useUserStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.sendinput {
    /* background-color: chocolate; */
    width: 100%;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 30px;
    display: flex;  
    align-items: center;
    justify-content: center;
}
.disabled{
    color: #212121;
    font-weight: normal;
    height: 100%;
}
.img {
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
    /* background-color: chartreuse; */
}

.img img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}

.send {
    height: 90%;
    flex-grow: 1;
    /* background-color:darkgoldenrod; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.send .input {
    border-radius: var(--border-radius-max);
    height: 100%;
    width: 85%;
    background-color: #ffffff;
    overflow: hidden;
    border: 2px solid #f1f2f3;
}

.send .input input {
    height: 100%;
    width: 100%;
    background-color: #f1f2f3;
    border: 2px solid #f1f2f3;
}

.send .submit {
    height: 100%;
    color: #fff;
    width: 13%;
    background-color: rgb(127, 214, 245);
    border: none;
    border-radius: var(--border-radius-max);
}

.send .submit:hover {
    background-color: #0aaeec;
}
</style>
