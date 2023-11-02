<template>
    <el-result icon="success" title="上传成功"
    
    :sub-title="`本次共上传${succeed.count}个视频,总计${succeed.size}MB(待审核)`">
        <template #extra>
            <el-button type="primary" @click.prevent="returnIndex">点击返回主页</el-button>
        </template>
    </el-result>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import{usevideouploadstore} from '@/pinia/videouploadstore'
const route = useRoute()
const router = useRouter()
const videouploadstore=usevideouploadstore()
// #endregion

// #region 第三方库

import axios from '@/utils/axios'

// #endregion
const succeed=reactive({
    size:0,
    count:0
})
// #region  发送请求 正常情况应该放入onMounted

onMounted(() => {
   const obj= JSON.parse(sessionStorage.getItem('uploadsucceed'))
succeed.size=obj.size
succeed.count=obj.count
sessionStorage.removeItem('uploadsucceed')
})
const returnIndex = () => {
    setTimeout(() => {
        videouploadstore.status='no'
   videouploadstore.videolist={}
    }, 1000);
    router.push("/")

 
    // console.log('成功')
}
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped  lang="less"></style>
