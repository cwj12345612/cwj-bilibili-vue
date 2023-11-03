<template>
    <div class="channel">
        <div class="header">
            <div class="content">
                <div class="title">
                    <div class="img">
                        <img src="@\assets\images\channel2.webp" alt="">
                    </div>
                    <div class="detail">
                        <h4>英雄联盟</h4>
                        <div class="msg">
                            <span>{{ mock('@integer(2000,10000)') + '个视频' }}</span>
                            <span>{{ mock('@integer(2000,10000)') + '次观看' }}</span>
                            <span>{{ mock('@integer(2000,10000)') + '个精选视频' }}</span>
                        </div>
                        <button class="add">
                            <span>
                                <i class="colourless tianjia"></i>
                            </span>
                            <span>订阅 {{ mock('@integer(1000,10000)') }}</span>

                        </button>
                    </div>
                </div>
                <ul class="tags">
                    <li v-for="index in mock('@integer(5,7)')">
                        <a :href="`/channel/${mock('@integer(10,10000)')}`">
                            {{ mock('@cword(2,5)') }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="filter">
                <ul class="nav">
                    <li :class="`${route.query.tab == 'featured' ? 'active' : undefined}`">
                        <router-link :to="`/channel/${route.params.id}?tab=featured`">
                            精选
                        </router-link>
                    </li>
                    <li :class="`${route.query.tab == 'multiple' ? 'active' : undefined}`">
                        <router-link :to="`/channel/${route.params.id}?tab=multiple`">
                            综合
                        </router-link>
                    </li>
                </ul>
                <div v-if="route.query.tab == 'multiple'" class="select">
                    <ul class="last">
                        <li class="active">
                            <span>
                                <i class="colourless zan"></i>
                                近期热门
                            </span>

                        </li>
                        <li>
                            <span>
                                <i class="colourless lishijilu"></i>
                                最新投稿
                            </span>

                        </li>
                    </ul>

                    <div class="rank">
                        <div class="head">
                            <h4>排行榜</h4>
                            <span>近3日内投稿，根据用户对内容的播放和互动数据进行排序，每30分钟更新一次</span>
                        </div>
                        <ul :class="showmore ? 'zk' : 'sq'" class="list">

                            <videocard v-for="index in 11"></videocard>

                        </ul>
                        <div class="more" @click="showmore = !showmore">
                            <span>{{ showmore ? '收起' : '展开更多' }}</span>
                            <span :class="showmore ? 'i' : undefined" style="  transition: all 0.3s;">
                                <i class="colourless xialaxiao"></i>
                            </span>
                            <span> ({{ mock('@integer(10,20)') }})</span>
                        </div>
                    </div>

                </div>
                <ul v-if="route.query.tab == 'featured'" class="year">
                    <li class="active">全部</li>
                    <li v-for="index in 20">{{ 2023 - index }}</li>
                </ul>
            </div>
            <ul class="more">
                <videocard v-for="index in 21"></videocard>
            </ul>
        </div>

    </div>
</template>
<script setup>
// #region  引入组件
import videocard from './channelcard/videocard.vue'
//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion
const showmore = ref(false)
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped lang="less">
.channel {
    background-color: rgb(244, 244, 244);
    width: 100%;
    // background-color: orange;
    // height: 1000px;

    .header {
        min-height: 188px;
        ;
        width: 100%;
        // // background-color: goldenrod;
        background: url('@/assets/images/channel4.webp') no-repeat;
        background-size: 100% 100%;

        .content {
            min-width: 890px;
            max-width: 1286px;
            width: 75vw;
            /* height: 1000px; */
            // height: 100%;
            // // background-color: olive;
            margin: 0 auto;

            .title {
                padding: 24px 0;
                display: flex;

                .img {
                    width: 100px;
                    aspect-ratio: 1;
                }

                .detail {

                    // // background-color: palevioletred;
                    margin-left: 10px;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;

                    h4 {
                        color: #fff;
                        font-weight: normal;
                        font-size: 18px;
                    }

                    .msg {
                        display: block;
                        align-items: center;

                        span {
                            margin-right: 20px;
                            color: #fff;
                            font-size: 14px;
                        }
                    }

                    .add {
                        border: none;
                        border-radius: 3px;
                        padding: 5px 30px;
                        display: flex;
                        align-items: center;

                        span {
                            font-size: 18px;
                            color: #222;
                            margin-left: 10px;
                        }
                    }
                }
            }

            .tags {
                display: flex;
                flex-wrap: wrap;

                li {

                    margin-right: 20px;
                    padding: 3px 20px;
                    border-radius: 10px;
                    background: rgba(0, 0, 0, 0.6);

                    a {
                        font-size: 14px;
                        color: #fff;
                    }
                }
            }
        }
    }

    .container {
        min-width: 890px;
        max-width: 1286px;
        width: 75vw;
        // height: 1000px;
        // // background-color: cadetblue;
        margin: 0 auto;

        .filter {
            // background-color: aquamarine;

            .nav {
                // background-color: palegreen;
                height: 50px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #99a299;

                li {
                    margin-right: 20px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    // background-color: paleturquoise;

                    &.active {
                        border-bottom: 3px solid #394858;
                    }
                }
            }

            .select {
                // // background-color: green;
                margin-top: 10px;

                .last {
                    display: flex;

                    li {
                        background-color: #fff;
                        cursor: pointer;
                        margin-right: 20px;
                        padding: 7px 15px;
                        // background-color: #fff;
                        font-size: 16px;
                        border-radius: 6px;

                        &.active {
                            border: 1px solid;
                        }
                    }
                }

                .rank {
                    margin-top: 20px;
                    // background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-bottom: 2px solid #99a299;

                    .head {
                        align-self: flex-start;
                        margin-bottom: 20px;
                        display: flex;
                        align-items: baseline;

                        h4 {
                            font-weight: normal;
                            font-size: 18px;
                            margin-right: 10px;
                        }

                        span {
                            font-size: 13px;
                            color: #99a299;
                        }
                    }

                    .list {
                        width: 100%;

                        // background-color: cornflowerblue;
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        grid-column-gap: 15px;
                        grid-row-gap: 20px;

                        &.sq {
                            // aspect-ratio: 5/1;
                            width: 100%;
                            aspect-ratio: 5/1;
                            overflow: hidden;

                        }

                        &.zk {
                            overflow: none;
                            aspect-ratio: none;
                        }
                    }

                    .more {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        // background-color: olive;
                        cursor: pointer;

                        span {
                            margin-right: 5px;
                            color: #99a299;
                            color: 18px;

                        }

                        span.i {
                            transform: rotate(180deg);
                        }
                    }
                }
            }

            .year {
                display: flex;
                flex-wrap: wrap;

                li {
                    cursor: pointer;
                    background-color: #fff;
                    margin-right: 10px;
                    margin-top: 10px;
                    padding: 5px 8px;

                    // background-color: #fff;
                    &.active {
                        border: 2px solid #99a299;
                    }
                }
            }
        }

        .more {
            margin-top: 40px;
            width: 100%;
            // background-color: tomato;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-column-gap: 15px;
            grid-row-gap: 20px;
        }
    }

}
</style>
