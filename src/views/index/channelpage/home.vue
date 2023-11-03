<template>
    <div class="home">
        <div class="last">
            <div class="header">
                <h4>最近看过的频道</h4>
                <span>{{ mock('@integer(20,400)') }}</span>
            </div>
            <div class="list">
                <el-scrollbar always="true">
                    <div class="scrollbar-flex-content">
                        <a v-for="index in 30" href="#" class="card">
                            <div class="img">
                                <img src="@\assets\images\channel2.webp" alt="">
                            </div>
                            <h4>
                                {{ mock('@cword(2,5)') }}
                            </h4>
                            <span>
                                {{ mock('@datetime(MM-dd)') + '浏览' }}
                            </span>
                        </a>

                    </div>
                </el-scrollbar>
            </div>
        </div>
        <div class="hot">
            <div class="header">
                <h4>热门频道</h4>
                <span>{{ mock('@integer(20,100)') }}</span>
            </div>
            <ul class="list">
                    <li>
                        <div class="header">

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
<style scoped lang="less">
.home {
    min-width: 890px;
    max-width: 1286px;
    width: 75vw;
    height: 1000px;
    margin: 0 auto;
    padding-top: 30px;
    background-color: rgb(244, 244, 244);

    .last {
        display: flex;
        flex-direction: column;

        .header {
            padding: 10px 0;
            background-color: aquamarine;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            h4 {
                font-weight: normal;
                font-size: 18px;
                margin-right: 10px;
                color: #222;
            }

            span {
                color: #99a299;
                font-size: 14px;
            }
        }

        .list {

            .scrollbar-flex-content {
                display: flex;

                .card {
                    background-color: #fff;

                    &:hover>* {
                        color: #0aaee0;
                    }

                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                    width: 170px;
                    height: 150px;
                    // background-color: orange;
                    padding: 16px 10px 16px 16px;
                    margin-right: 10px;

                    .img {
                        width: 50px;
                        aspect-ratio: 1;
                    }

                    h4 {
                        font-weight: normal;
                        font-size: 18px;
                        color: #222;
                    }

                    span {
                        color: #99a299;
                        font-size: 14px;
                    }
                }
            }
        }
    }

    .hot {
        margin-top: 20px;
        width: 100%;
        .header {
            
            padding: 10px 0;
            background-color: aquamarine;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            h4 {
                font-weight: normal;
                font-size: 18px;
                margin-right: 10px;
                color: #222;
            }

            span {
                color: #99a299;
                font-size: 14px;
            }
        }
        ul.list{
            margin-top: 10px;
            width: 100%;
          background-color: #0aaee0;
            display: flex;
            flex-direction: column;
            li{
                width: 100%;
                .header{
                    width: 100%;
                    height: 50px;
                }
            }
        }
    }
}</style>
