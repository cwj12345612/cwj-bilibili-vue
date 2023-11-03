<template>
    <div class="navlist">
        <div class="search">
            <input type="text" placeholder="搜索频道">
            <button>
                <i class="colourless faxianweixuanzhongxuanzhong"></i>
            </button>
        </div>
        <div class="alllist">
            <a class="header" href="/channel">
                <h4>
                    发现频道
                </h4>
                <span>
                    <i class="colourless gengduo"></i>
                </span>
            </a>
            <ul class="list" :class="showlist ? undefined : 'sq'">
                <a href="/channel">
                    <span style="color: #222;font-size: 14px;">全部</span>
                    <span style="font-size: 12px;">{{ mock('@integer(30,1000)') }}</span>
                </a>
                <a :href="`/channel/type/23`" v-for="index in 15">
                    <span style="color: #222;font-size: 16px;">{{ mock('@cword(2,5)') }}</span>
                    <span style="font-size: 12px;">{{ mock('@integer(30,1000)') }}</span>
                </a>
            </ul>
            <div class="open" @click="showlist = !showlist">
                <span>{{ showlist ? '收起' : '展开' }}</span>
                <span class="i" :class="showlist ? 'sq' : 'zk'">
                    <i class="colourless xialaxiao"></i>
                </span>
            </div>
        </div>
        <div class="mylist">
            <div class="header">
                <h4 style="font-size: 18px;  font-weight: normal;">
                    我的订阅
                </h4>
                <span style="cursor: pointer;" class="setting" @click="setting=!setting">{{ setting ?'保存':'管理' }}</span>
            </div>
            <ul class="list">
                <li v-for="index in 7">
                 <a href="#">
                    <div class="left">
                    <div class="img" style="height: 100%;">
                        <img src="@\assets\images\channel1.webp" alt="">
                    </div>
                    <h4 style="font-weight: normal; font-size: 16px; margin-left: 10px;color: #222;">公开课</h4>
                   </div>
                   <div class="setting" v-if="setting">
                    <span>删除</span>
                    <span>置顶</span>
                   </div>
                 </a>
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
const showlist = ref(false)
const setting=ref(false)
//#endregion

</script>
<style scoped lang="less">
.navlist {
    height: calc(100vh - 64px);
    width: 264px;
    background-color: #fff;
    overflow: auto;
    padding: 20px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .search {
        width: 100%;
        height: 40px;
        background-color: #fff;
        border: 1px solid #99a299;
        display: flex;
        padding-right: 10px;
        align-items: center;
        justify-content: space-between;

        input {
            height: 90%;
            padding-left: 10px;

        }

        button {
            padding: 5px;
            background: none;
            border: none;
        }
    }

    .alllist {
        margin-top: 20px;
        // height: 500px;
        width: 100%;
        // background-color: cadetblue;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .header {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            align-items: center;
            width: 100%;
            background-color: #fff;

            &:focus {
                background: rgb(231, 231, 231);
            }

            h4 {
                font-weight: normal;
                font-size: 18px;
            }
        }

        .list {
            width: 100%;
            background-color: #fff;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            transition: 0.5s ease;

            &.sq {
                max-height: 120px;
                overflow: hidden;
            }

            a {
                display: flex;
                height: 40px;
                // background-color: aquamarine;
                align-items: center;
                &:where(:hover,.router-link-active){
                    background: rgb(244, 244, 244);
                }
              
            }
        }

        .open {
            display: flex;
            align-items: center;
            margin-top: 10px;
            cursor: pointer;

            .i {
                transition: all 0.3s;

                &.sq {
                    transform: rotate(180deg);
                }
            }
        }
    }
    .mylist{
        margin-top: 10px;
        width: 100%;
        border-top: 2px solid #99a299;
        // background-color: orange;
        .header{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;

        }
        .list{
            display: flex;
            flex-direction: column;
            a{
                &:where(:hover,.router-link-active){
                    background: rgb(244, 244, 244);
                }
                padding: 5px 0;
                // background-color:blueviolet;
                height: 40px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .setting{
                    display: flex;
                    align-items: center;
                    span{
                        color: #99a299;
                        cursor: pointer;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}</style>
