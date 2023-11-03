<template>
    <div class="videocard">
        <div class="img">
            <a href="/play/10086">
                <img src="@\assets\images\channel3.webp" alt="">


            </a>
            <div class="detail">
                <span>
                    <i class="colourless bofangshu"></i>
                    {{ mock('@integer(100,1000)') }}
                </span>
                <span>
                    <i class="colourless zan"></i>
                    {{ mock('@integer(100,1000)') }}
                </span>
            </div>
        </div>
        <h4>
            <a href="/play/10086">
                {{ mock('@cword(10,50)') }}
            </a>
        </h4>
        <a class="info" href="/space?uid=10086">
            <span>
                <i class="colourless UPzhu"></i>
                {{ mock('@cword(2,7)') }}
            </span>
        </a>
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
<style scoped lang="less">
.videocard {
    width: 100%;
    // background-color: pink;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .img {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 6px;
        overflow: hidden;

        .detail {
            position: absolute;
            bottom: 0;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            span {
                margin-left: 20px;
            }
        }
    }

    h4 {
        font-weight: normal;
        font-size: 16px;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        a {
            color: #222;

        }

        &:hover>a {
            color: #0aaee0;
        }

    }

    .info {
        &:hover {
            color: #0aaee0;
        }

        display: flex;
        align-items: center;
        color: #99a299;

        span {
            display: flex;
            align-items: center;
        }
    }
}</style>
