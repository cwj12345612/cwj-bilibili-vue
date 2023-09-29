<template>
    <div class="index">
        <div class="data-wrp">
            <div class="header">
                <div class="ca">
                    <h5 class="active">视频数据</h5>
                    <h5>专栏数据</h5>
                    <h5>音频数据</h5>
                </div>
                <div class="time">
                    每天中午12点更新昨天的数据
                </div>
            </div>
            <ul class="center">
                <li v-for="index in 8">
                    <div class="header">
                        <div>
                            <i class="colourless shoucangtianchong"></i>
                            {{ mock('@cword(4,8)') }}
                        </div>

                    </div>
                    <div class="count">
                        {{ mock('@integer(30,10000)') }}
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
<style scoped>
.index {
    /* height: 100%; */
    width: 100%;
    /* background-color: burlywood; */
}

.data-wrp {
    padding: 20px;
    height: 270px;
    width: 100%;
    /* background-color: cadetblue; */
    background-color: #e6e7e8;
}

.data-wrp .header {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.data-wrp .header .ca {
    display: flex;

}

.data-wrp .header .ca h5 {
    cursor: pointer;
    font-weight: normal;
    margin-right: 10px;
    font-size: 20px;
}

.ca h5.active {
    color: #0aaee0;
}

.data-wrp .header .time {
    font-size: 16px;
    color: #99a299;

}

.data-wrp .center {
    /* background-color: cornflowerblue; */
    width: 100%;
    height: 200px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.data-wrp .center li {

    border-radius: 8px;
    cursor: pointer;
    background-color: #f5fcfe;
}

.data-wrp .center li .header {
    color: #99a299;
    display: flex;
    justify-content: space-between;
}

.data-wrp .center li .count {
    color: #0aaee0;
    font-size: 20px;
}</style>
