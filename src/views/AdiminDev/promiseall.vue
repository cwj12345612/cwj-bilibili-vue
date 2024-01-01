<template>
<div style="width: 100px;
height: 100px;background-color: palevioletred;">
    测promiseall<br>
    <button @click.prevent="testall">测试promiseall</button>
</div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import {useRoute,useRouter} from 'vue-router'
const route=useRoute()
const router=useRouter()
// #endregion

// #region 第三方库

import axios from '@/utils/axios'

// #endregion

// #region  发送请求 正常情况应该放入onMounted

    onMounted(() => {

})
const testall=async ()=>{
    const list=[]
//    sendli(100)
for (let index = 0; index <50; index++) {
list.push( sendli(index))
}
Promise.all(list).then(req=>{
    console.log('aafgtgbdfsd')
})

}
const sendli=async (i)=>{
    const ts=[]
for (let index = 70; index < 100; index++) {
  const t=axios.get('/api/PromiseTest/t1?i='+index+'&kk='+i).then(req=>{
    // console.log("接收"+index)
  })
    ts.push(t)
}
await axios.all(ts).then(()=>{
    console.log("发送他完成")
})
}
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'
import { t } from '@wangeditor/editor';

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped  lang="less">

</style>
