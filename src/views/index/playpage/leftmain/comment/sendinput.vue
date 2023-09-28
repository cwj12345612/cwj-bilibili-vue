<template>
    <div class="sendinput">
        <div class="img">
            <img src="@/assets/images/头像.png" alt="">
        </div>
        <div class="send">
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
.sendinput {
    /* background-color: chocolate; */
    width: 100%;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 100%;
    grid-column-gap: 30px;
}

.img {

    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: chartreuse; */
}

.img img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
.send{
    /* background-color:darkgoldenrod; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.send .input{
    border-radius: var(--border-radius-max);
    height: 100%;
    width: 85%;
    background-color: #ffffff;
overflow: hidden;
border: 2px solid #f1f2f3;
}
.send .input input{
    height: 100%;
    width: 100%;
    background-color: #f1f2f3;
    border: 2px solid #f1f2f3;
}
.send .submit{
height: 100%;
color: #fff;
width: 13%;
background-color: rgb(127, 214, 245);
border: none;
border-radius: var(--border-radius-max);
}
.send .submit:hover{
    background-color: #0aaeec;
}
</style>
