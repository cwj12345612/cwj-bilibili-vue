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
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<template>
    <div class="playpage_leftmain" 
    
    >
        <div class="title">
            <h1>
                {{ mock('@cword(20,100)') }}
            </h1>
            <div class="detail">
                <div>
                    <i class="colourless bofangshu"></i>
                    <span>{{ mock({ 'num|4-100': 100 }).num + '万' }}</span>
                </div>
                <div>
                    <i class="colourless danmushu"></i>
                    <span>{{ mock({ 'num|4-100': 100 }).num + '万' }}</span>
                </div>
                <div>

                    <span>{{ mock('@datetime("yyyy-MM-dd HH:mm:ss")') }}</span>
                </div>
                <div>
                    <i class="colourless guanbi" style="color: rgb(253, 103, 111);"></i>
                    <span>未经作者授权，禁止转载</span>
                </div>
            </div>
        </div>

<left_main_playwarp></left_main_playwarp>
<left_main_toolbar></left_main_toolbar>
<leftmain_videodesc></leftmain_videodesc>
<leftmain_tags></leftmain_tags>
<leftmain_comment></leftmain_comment>
    </div>
</template>

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
width: 48vw;
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
    font-size: 14px;
    font-weight: normal;
    width: 100%;
    color: #18191c;
    font-size: 20px;
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 5px;
}

.playpage_leftmain .title .detail {
    font-size: 13px;
    color: #9499a0;

    width: 100%;
    justify-content: flex-start;
    display: flex;
    align-items: center;

}

.playpage_leftmain .title .detail>div {
    margin-right: 12px;
}
</style>
