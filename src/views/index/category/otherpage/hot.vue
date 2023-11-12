<template>
    <div class="hot">
        <h3>前方高能</h3>
        <ul class="lists">
            <li v-for="index in 10">
                <div class="img">
                    <a href="#">
                        <img src="@\assets\images\category_p.webp" alt="">
                    </a>
                </div>
                <p class="title">
                    <a href="/play/10086">
                        {{ mock('@cword(5,40)') }}
                    </a>
                </p>
                <a class="detail" href="/space?uid=10086">
                    <span>
                        <i class="colourless UPzhu"></i>
                        {{ mock('@cword(3,8)') }}
                    </span>
                    <span>
                        ·
                        {{ mock('@datetime(yyyy-MM-dd)') }}
                    </span>
                </a>
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
<style scoped  lang="less">
.hot {
    margin-top: 30px;
    // background-color: aqua;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;

    h3 {
        font-weight: normal;
        font-size: 25px;
        height: 50px;
        padding-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        // background-color: yellow;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .lists {
        width: 100%;
        flex-grow: 1;
        height: 100%;
        // background-color: chocolate;
        display: grid;
        gap: 20px 16px;
        grid-template-columns: repeat(5, 1fr);

        li {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            .img {
                border-radius: 6px;
                overflow: hidden;
                width: 100%;
                aspect-ratio: 16/9;
            }

            .title {

                word-break: break-all;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;

                a {
                    font-size: 15px;
                    color: #18191c;
                }

                &:hover a {
                    color: #0aaee0;
                }
            }

            .detail {
                font-size: 12px;
                color: #9499a0;

                &:hover {
                    color: #0aaee0;
                }
            }
        }
    }
}</style>
