<template>
    <div class="navlist">
        <h3>动画</h3>
        <ul class="list">
            <li><a href="#">首页</a></li>
            <li v-for="index in 7">
                <a href="#" :class="index == 3 ? 'active' : undefined">{{ mock('@cword(3,7)') }}</a>
            </li>
        </ul>
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
// #endregion

// #region 第三方库

import axios from '@/utils/axios'

// #endregion

// #region  发送请求 正常情况应该放入onMounted

onMounted(() => {

})

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped lang="less">
.navlist {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // background-color: palevioletred;
    width: 100%;
    height: 64px;

    h3 {
        font-weight: normal;
        font-size: 25px;
        margin-right: 25px;
    }

    .list {
        display: flex;
        align-items: center;
        // background-color: #fff;

        li {
            // background-color: blueviolet;
            margin-right: 40px;
            padding: 5px 0;

            a {
                color: #61666d;
                font-size: 16px;
            }

            &:has(>.active) {
                border-bottom: 2px #0aaee0 solid;
            }
        }
    }

}
</style>
