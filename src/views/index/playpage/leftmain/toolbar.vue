<template>
    <div class="toolbar">
        <ul class="sanlian">
            <li class="yes">
                <i class="colourless zan"></i>
                <span>{{ mock({ 'num|10-33': 33 }).num + '万' }}</span>
            </li>
            <li class="yes">
                <i class="colourless Bbi"></i>
                <span>{{ mock({ 'num|10-33': 33 }).num + '万' }}</span>
            </li>
            <li >
                <i class="colourless shoucang"></i>
                <span>{{ mock({ 'num|10-33': 33 }).num + '万' }}</span>
            </li>
            <li>
                <i class="colourless fenxiang"></i>
                <span>{{ mock({ 'num|10-33': 33 }).num + '万' }}</span>
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
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.toolbar {
    padding: 16px 0 15px 0;
    width: 100%;
    /* background-color: blueviolet; */
    /* background-color: #fff; */
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #e6e7e8;
}

.sanlian {
    display: flex;
    align-items: center;
    /* background-color: blueviolet; */
}

.sanlian li{
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
}
.sanlian li:hover{
color: rgb(0, 174, 236);
}
.sanlian li i{
    font-size: 20px;
}
.toolbar .other{
    display: flex;
    align-items: center;
    /* background-color: teal; */

}
.toolbar .other li{
    font-size: 20px;
    cursor: pointer;
    margin-left: 20px;

}
.toolbar .other li:hover{
    color: rgb(0, 174, 236);
}
.toolbar .other li i{
    font-size: 20px;
}
.sanlian li.yes{
    color: rgb(0, 174, 236);
}
</style>
