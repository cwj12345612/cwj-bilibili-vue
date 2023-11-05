<template>
    <el-button 
    @click.prevent="channge"
    :type="status?'warning':'success'">{{ status?'暂停上传' :'恢复上传'}}</el-button>
    <ul class="videos ing">
        <li v-for="video in videolist">
            <div class="icon">
                <i class="colourless bofangshu"></i>
            </div>
            <div class="desc">
                <div class="title">
                    <div style="display: flex;align-items: flex-end;">
                        <h4>
                        
                            {{ video.name.length <= 30 ? video.name.substring(0, video.name.lastIndexOf('.')) :
                                video.name.substring(0, 30) + '...' }} 
                                </h4>
                                <span style="font-size: 13px; color: #99a299;flex-shrink: 0;margin-left: 10px;">类型:
                                    {{ video.name.substring(video.name.lastIndexOf('.') + 1) }}
                                </span>
                    </div>
                    <div class="setting">
                        <span style="margin-right: 20px;color: #99a299;font-size: 14px;">
                            {{ `${video.nowsize <= video.size ? video.nowsize : video.size}MB/${video.size}MB` }}</span>
                                <!-- <i class="colourless bofangqi-zanting" title="暂停上传"></i>
                                <i class="colourless shuayishua" title="重新上传"></i>
                                <i class="colourless guanbi" title="取消上传"></i> -->

                    </div>
                </div>
                <el-progress :percentage="video.nowsize >= video.size ? 100 :
                    Number((video.nowsize / video.size * 100).toFixed(1))
                    " :stroke-width="13"
                     :status="video.nowsize >= video.size ? 'success' :
        schedule.issuspend ? 'warning' : null
        " 
        striped 
        :duration="10" />
            </div>
        </li>

    </ul>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, defineProps } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'

import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()

// #endregion
//#region 接收父组件的传过来的值
const { schedule } = defineProps({
    schedule: Object
})
const videolist = computed(() => {
    const list = []
    console.log(schedule.videolist)
  
const videos=schedule.videolist

for(let vv of Object.keys(videos)){
  list.push(videos[vv])
}
    return list
})

//#endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion
//#region 暂停上传 恢复上传
//是否正在上传
const status=ref(false)
const channge = () => {
    console.log(status.value)
  status.value=!status.value
  if(status){
    window.uploadrecover()
  }else{
    window.uploadsuspend()
  }
}

//#endregion
</script>
<style scoped l lang="less">
.videos {
    max-height: calc(60px * 10);
    overflow: auto;
}

.videos li {
    border-bottom: 2px solid #e6e7e8;
    display: flex;
    width: 100%;
    /* background-color: darkgoldenrod; */
    height: 60px;
    align-items: center;
    justify-content: flex-start;
}

.videos li .icon {
    margin-right: 20px;
}

.videos li .icon i {
    color: #0aaee0;
    font-size: 50px;
}

.videos li .desc {
    // padding-top: 5px;
    // padding-bottom: 10px;
    // padding-right: 20px;
    padding: 5px 20px 10px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.videos li .desc .title {
    display: flex;
    align-items: center;

    justify-content: space-between;
}

.videos li .desc .title h4 {

    font-weight: normal;
    font-size: 20px;
}

.setting i {
    margin-left: 10px;
    font-size: 20px;
    background-color: #e6e7e8;
    cursor: pointer;
    padding: 4px;
    border-radius: 8px;
}

.jindu {
    width: 100%;
    border: 2px solid #e6e7e8;
}

.ing {
    // background-color: orange;
    max-height: 500px;
}
</style>
