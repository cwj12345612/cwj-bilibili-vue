<template>
 <ul class="videos ing" >
        <li v-for="(file, index) in videos">
            <div class="icon">
                <i class="colourless bofangshu"></i>
            </div>
            <div class="desc">
                <div class="title">
                    <div style="display: flex;align-items: flex-end;">
                        <h4 :title="file.name.substring(0, file.name.lastIndexOf('.'))">
                                        <!-- {{ file.name }} -->
                                    {{ file.name.length <= 20 ? file.name.substring(0, file.name.lastIndexOf('.')) :
                                        file.name.substring(0, 20)+'...' }} 
                                        <!-- {{
                                        file.name.substring(0,file.name.lastIndexOf('.')) }} -->
                                </h4>
                        <span style="font-size: 13px; color: #99a299;flex-shrink: 0;margin-left: 10px;">类型:
                            {{ file.name.substring(file.name.lastIndexOf('.') + 1) }}</span>
                    </div>
                    <div class="setting">
                        <span style="margin-right: 20px;color: #99a299;font-size: 14px;">30MB/{{
                            fileSzieToString(file) }}</span>
                        <!-- <i class="colourless bofangqi-zanting" title="暂停上传"></i>
                                <i class="colourless shuayishua" title="重新上传"></i>
                                <i class="colourless guanbi" title="取消上传"></i> -->
                    </div>
                </div>
                <div class="jindu"></div>
            </div>
        </li>
    </ul>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,defineProps} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
import { fileSzieToString } from '@/utils/fileUtils'
// #endregion
defineProps({
    videos:Array
})
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped l lang="less">

.videos {
    max-height: calc(60px * 5);
    overflow: auto;
}

.videos li {
    border-bottom: 2px solid  #e6e7e8;
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
