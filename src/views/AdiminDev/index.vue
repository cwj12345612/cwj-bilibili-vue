<template>
    <div class="admindev">
        开发文档
        <div class="c">
            你好
        </div>
        <button @click.prevent="t5">测试jwt1</button>
        <primiseall></primiseall>
        <h3>实时{{ re }}</h3>
        <hr>
        <button @click="changere">改变re</button>
    </div>
    
</template>
<script setup>
// #region  引入组件
import primiseall from './promiseall.vue'
//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
import axios from '@/utils/axios';
import { readBuffer, isPNG } from '@/utils/fileUtils'
// #endregion
import{getre2} from './aa'
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const type = ref('空')
function change(e) {
console.log('此处需要检查文件类型');

}
const t5=()=>{
    axios.get('/api/test2/t5')
    .then(req=>{
        console.log(req.data)
    })
}
const re= reactive({
    name:'js实时读取',
    size:10
})
const changere=()=>{
    re.size=mock('@integer(10,1000)')
}
const getre=()=>{
    return re;
}
onMounted(()=>{
    window.getre=getre
    
})
onMounted(()=>{
    getre2()
})
//#endregion

</script>
<style scoped lang="less">
.admindev {
    background-color: palegreen;
    height: 500px;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
