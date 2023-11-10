<template>
    <div class="playpage_leftmain">
        <div class="title">
            <h1>
                {{ videolist.title }}
            </h1>
            <div class="detail">
                <span>
                    <i class="colourless bofangshu"></i>
                    {{ dataUtils.toWan(videolist.wacthCount) }}
                </span>
                <span>
                    <i class="colourless danmushu"></i>
                    {{ dataUtils.toWan(videolist.danmuCount) }}
                </span>

                <span>{{ videolist.uptime }}</span>

                <span v-if="videolist.type == 0">
                    <i class="colourless guanbi" style="color: rgb(253, 103, 111);"></i>
                    未经作者授权，禁止转载
                </span>
                <el-popover v-else title="转载来源" :width="200" trigger="hover" :content="videolist.zhuanzai">
                    <template #reference>
                        <span class="m-2">转载</span>
                    </template>
                </el-popover>
            </div>
        </div>

        <left_main_playwarp></left_main_playwarp>
        <left_main_toolbar></left_main_toolbar>
        <leftmain_videodesc :synopsis="videolist.synopsis"></leftmain_videodesc>
        <leftmain_tags :channels="videolist.tags"></leftmain_tags>
        <!-- <leftmain_comment></leftmain_comment> -->
    </div>
</template>

<script setup>
// #region  引入组件
import left_main_playwarp from './playwarp.vue'
import left_main_toolbar from './toolbar.vue'
import leftmain_videodesc from './video_desc.vue'
import leftmain_tags from './tags.vue'
import leftmain_comment from './comment'
//  #endregion
// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()

import { GetvideoListTileAndData } from '@/api/views/playpage'
import dataUtils from '@/utils/dataUtils.js'
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion
const videolist = reactive({})
onMounted(() => {
    const id = route.params.id
    GetvideoListTileAndData(id)
        .then(videos => {
            for (let key of Object.keys(videos)) {
                videolist[key] = videos[key]
            }
        })
})
</script>

<style scoped>
.playpage_leftmain {

    /* background-color: palevioletred; */
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* 
:style="pageconfigStore.dynamicWH({ normal: 668, max: 1694, min: 668 })"
*/
    max-width: 1360px;
    min-width: 668px;
    width: 55vw;
}

.playpage_leftmain .title {
    min-height: 86px;
    flex-grow: 1;
    /* background-color: paleturquoise; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 30px;
}

.playpage_leftmain .title h1 {
    font-size: 16px;
    font-weight: normal;

    color: #18191c;
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    /* background-color: blueviolet; */
}

.playpage_leftmain .title .detail {
    font-size: 13px;
    color: #9499a0;

    /* background-color: aqua; */

    display: flex;
    align-items: center;

}

.playpage_leftmain .title .detail>span {
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
