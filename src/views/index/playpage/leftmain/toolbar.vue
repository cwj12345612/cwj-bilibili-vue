<template>
    <div class="toolbar">
        <ul class="sanlian">
            <li :class="status.zan?'yes':undefined">
                <i class="colourless zan"></i>
                <span>{{ dataUtils.toWan(toolbar.zanSize) }}</span>
            </li>
            <li :class="status.bi? 'yes':undefined">
                <i class="colourless Bbi"></i>
                <span>{{ dataUtils.toWan(toolbar.toubiCount) }}</span>
            </li>
            <li :class="status.fav? 'yes':undefined">
                <i class="colourless shoucang"></i>
                <span>{{ dataUtils.toWan(toolbar.favCount) }}</span>
            </li>
            <li>
                <i class="colourless fenxiang"></i>

            </li>

        </ul>
        <ul class="other">
            <li>

                <i class="colourless tousu"></i>
                <span>稿件投诉</span>

            </li>
            <li>
                <i class="colourless _ico_reply"></i>
                <span>记笔记</span>
            </li>
            <li>

                <i class="colourless diandiandianshu"></i>

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
import { GetToolbar } from '@/api/views/playpage'
import dataUtils from '@/utils/dataUtils';
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'


const mock = (str) => { return Mock.mock(str) }

//#endregion

//#region 点赞数 投币数 收藏数
const toolbar = reactive({})
// watch(() => route.params, () => {
//     // console.log(route.params.id,route.query.index)
//     if (!route.params.id) return
//     GetToolbar(route.params.id, route.query.index ?? 1)
//         .then(li => {
//             // console.log(li)
//             for (let key of Object.keys(li)) {
//                 toolbar[key] = li[key]
//             }
//         })
// }, { immediate: true })
//#endregion

//#region  查询该用户是否投币点赞收藏
const status=reactive({
    zan:true,
    fav:false,
    bi:false
})
//#endregion

</script>
<style scoped lang="less">
.toolbar {
    padding: 16px 0 15px 0;
    width: 100%;
    /* background-color: blueviolet; */
    /* background-color: #fff; */
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e6e7e8;

    .sanlian {
        display: flex;
        align-items: center;

        /* background-color: blueviolet; */
        li {
            cursor: pointer;
            font-size: 18px;
            margin-right: 20px;

            &.yes {
                color: #0aaee0;
            }

            &:hover {
                color: #0aaee0;
            }

            i {
                font-size: 20px;
            }
        }
    }

    .other {
        display: flex;
        align-items: center;

        /* background-color: teal; */
        li {
            display: flex;
            align-items: center;
            font-size: 16px;
            cursor: pointer;
            margin-left: 20px;

            &:hover {
                color: #0aaee0;
            }



            i {
                font-size: 20px;
            }
        }
    }
}
</style>
