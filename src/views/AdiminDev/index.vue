<template>
    <div class="admindev">
        开发文档
     <button @click="newwebsocket">测试websocket</button>
     <button @click="send">发送信息</button>
     <button @click="close">关闭</button>
     <span>后台信息:{{ msg }}</span>
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
import axios from '@/utils/axios';
import { readBuffer, isPNG } from '@/utils/fileUtils'
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'


const mock = (str) => { return Mock.mock(str) }

//#endregion
let socket=null;
const newwebsocket=()=>{

   socket= new WebSocket("ws://localhost:8081/danmu/ws/1/12")

   socket.onopen=()=>{
    console.log('打开连接')
   }

}
const send=()=>{
    const msg=mock('@cword(10)')
    socket.send(JSON.stringify({
        Txt:msg,
        Moment:0,
        Vid:12
    }))
    socket.onclose=()=>{
        console.log('连接关闭')
    }
}
const close=()=>{
    socket.close()
}
const msg=ref('')
onMounted(()=>{
setTimeout(() => {
    const ket= new WebSocket('ws://localhost:8081/danmu/ws/12/12')
   ket.onopen=()=>{
    console.log('初始化打开')

   }
   ket.onmessage=(event)=>{
    console.log('接收大信息#'+event.data)
    msg.value=event.data
   }
}, 2000);
})
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
