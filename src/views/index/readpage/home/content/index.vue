<template>
    <div class="content">
        <div v-if="navlist.length == 0" class="header">
            <h3>推荐文章</h3>
        </div>
        <div v-if="navlist.length > 0" class="header">
            <ul class="navlist">
                <li v-for="(li, index) in navlist">
                    <router-link :class="li.rid == route.query.rid ? 'active' : undefined" :to="li.rid == undefined ? '' : { name: 'read_home', query: { rid: li.rid } }
                        ">
                        {{ li.title }}
                    </router-link>
                </li>
            </ul>
            <select>
                <option :value="mock('@id()')">默认排序</option>
                <option :value="mock('@id()')" v-for="index in 5">{{ mock('@cword(3,7)') }}</option>

            </select>
        </div>
        <ul class="items">
            <li v-for=" li  in list">
                <div class="left">
                    <div class="title">
                        <router-link class="h3" :to="li.href">
                            {{ li.title }}
                        </router-link>
                        <a :href="li.list" v-if="li.list" class="list">来自文集</a>
                    </div>
                    <p class="desc">{{ li.desc }}</p>
                    <div class="sys">

                        <span>
                            <i class="colourless zan"></i>
                            {{ li.sys.zan }}</span>


                        <span>
                            <i class="colourless shequ"></i>
                            {{ li.sys.pin }}</span>
                        <span>
                            <i class="colourless fenxiang"></i>
                            {{ li.sys.fen }}</span>
                        <span>
                            <i class="colourless zhiboguankanshu"></i>
                            {{ li.sys.kan }}</span>

                    </div>
                </div>
                <div
                v-if="mock('@bool()')"
                class="img">
                    <img :src="li.img" alt="">
                </div>
            </li>
        </ul>
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

const navlist = reactive([])
const list = reactive([])
//#endregion
watch(() => route.params.ca, () => {
    // console.log('parems')
    navlist.length = 0
    if (route.params.ca != 'recommend') {
        const temp = [
            { id: mock('@id()'), title: '全部', },
            { id: mock('@id()'), title: mock('@cword(3,6)'), rid: 1 },
            { id: mock('@id()'), title: mock('@cword(3,6)'), rid: 2 },
            { id: mock('@id()'), title: mock('@cword(3,6)'), rid: 3 },
            { id: mock('@id()'), title: mock('@cword(3,6)'), rid: 4 }
        ]

        temp.forEach(li => {
            navlist.push(li)
        })
    }
}, { immediate: true })
watch(() => route.fullPath, () => {
    list.length = 0
    const count = mock('@integer(10,50)')
    for (let index = 0; index < parseInt(count); index++) {
        list.push(
            {
                id: mock('@id()'), title: mock('@cword(7,200)'), desc: mock('@cword(10,1000)'),href:'/read/'+mock('@id()'),
                sys: {
                    zan: mock('@integer(100,10000)'),
                    kan: mock('@integer(100,10000)'),
                    fen: mock('@integer(100,10000)'),
                    pin: mock('@integer(100,10000)'),
                },
                img: require('@/assets/images/初夏之星.png'),
                list: mock('@bool()') ? '/read/readlist/'+mock('@id()') : false
            }
        )
    }
    // console.log(list.length)
}, { immediate: true })
</script>
<style scoped lang="less">
.content {
    height: 600px;
    // background-color: palevioletred;
    width: 60%;
    overflow: hidden;
    background-color: #fff;
}

.header {
    padding-bottom: 20px;
    // background-color: greenyellow;

    .navlist {
        display: flex;
        height: 50px;
        border-bottom: 2px solid #99a299;
        margin-bottom: 10px;
    }

    li {
        margin-right: 20px;
        height: 100%;
        display: flex;
        align-items: center;

        a {
            color: #212121;
            font-size: 12px;

            &:hover,
            &.active {
                color: #0aaee0;
            }

        }

        &:has(a.active) {
            border-bottom: 2px solid #0aaee0;
        }
    }

}

.items {
    height: 100%;
    overflow: auto;
    // background-color: blueviolet;
    width: 100%;

    li {
        height: 91px;
        padding-bottom: 10px;
        width: 100%;
        margin: 20px 0;
        border-bottom: 2px solid #99a299;
        display: flex;

        justify-content: space-between;

        .img {
            height: 100%;
            border-radius: 8px;
            overflow: hidden;
            aspect-ratio: 16/9;
            flex-shrink: 0;
            margin-left: 30px;

        }

        .left {

            height: 100%;
            // background-color: cadetblue;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            overflow: hidden;

            width: 100%;

            .title {
                width: 100%;
                display: flex;
                // background-color: aqua;
                align-items: center;

                .h3 {
                    width: 100%;
                    overflow: hidden;

                    font-size: 20px;


                    color: #212121;

                    &:hover {
                        color: #0aaee0;
                    }

                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                    white-space: nowrap;
                    font-weight: normal;

                }

                .list {
                    // style="padding: 1px;border: 1px solid #99a299;border-radius: 5px;margin-left: 10px;"
                    padding: 1px;
                    border: 1px solid #99a299;
                    color: #99a299;
                    border-radius: 2px;
                    margin-left: 10px;
                    flex-shrink: 0;
                    background: none;
                }
            }

            .desc {
                width: 100%;
                color: #99a299;
                font-size: 16px;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                white-space: nowrap;
            }

            .sys {
                font-size: 14px;
                display: flex;
                align-items: center;

                span {
                    color: #99a299;

                    display: flex;
                    align-items: center;
                    margin-right: 20px;


                }
            }
        }
    }
}
</style>
