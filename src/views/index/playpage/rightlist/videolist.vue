<template>
    <div class="rightlist_videolist">
        <div class="header">
            <div class="videos">
                <span>视频选集</span>
                <span>({{ videos.find(v => v.index == nowplayvideoindex)?.index + '/' + videos.length }})</span>

            </div>
            <div class="playauto">
                <span>自动连播</span>
                <el-switch v-model="value3" inline-prompt active-text="是" inactive-text="否" />
            </div>

        </div>
        <ul class="list">
            <li :title="video.title" v-for="(video, index) in videos">
                <router-link :class="nowplayvideoindex == video.index ? 'now' : undefined" :to="video.href">
                    <span class="index">P{{ video.index }}</span>
                    <span class="title">{{ video.title }}</span>
                    <span class="duration">{{ (parseInt(video.duration / 60) !=0 ?(parseInt(video.duration / 60) + ':'): null) + parseInt(video.duration % 60) }}</span>
                </router-link>
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

import { GetVideosByVideolistId } from '@/api/views/playpage'

// #endregion

// #region  模拟数据 mockjs
const value3 = ref(true)
import Mock from 'mockjs'
const mock = (str) => { return Mock.mock(str) }
//#region  向后台获取视频分集
const videos = reactive([])
onMounted(() => {

    GetVideosByVideolistId(route.params.id)
        .then(list => {
            // console.log(list)
            list.forEach(li => {
                videos.push(li)
            });
        })
})
//#endregion
//#region  视频分集
const nowplayvideoindex = computed(() => {
    const index = route.query.index
    return index ?? 1
})

//#endregion
//#region 切换分集

//#endregion
</script>
<style scoped lang="less">
.rightlist_videolist {
    width: 100%;
    /* background-color: teal; */
    margin-top: 15px;
    background-color: rgb(241, 242, 243);
    border-radius: var(--border-radius-min);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
}

.rightlist_videolist .header {
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 24px;
    margin-bottom: 10px;
    padding: 0 16px;
    /* background-color: turquoise; */
    display: flex;
    justify-content: space-between;
}

.rightlist_videolist .header .videos {
    height: 100%;
    width: 45%;
    /* background-color: orangered; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.rightlist_videolist .header .videos .btn:hover {
    color: #0aaee0;
}

.rightlist_videolist .header .playauto .btn {
    cursor: pointer;
}

.rightlist_videolist .header .playauto {

    /* background-color: thistle; */
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rightlist_videolist .header .playauto i {
    font-size: 20px;
    cursor: pointer;

}

.rightlist_videolist .list {
    overflow: auto;
    padding-left: 15px;
    width: 100%;
    max-height: 340px;
    /* background-color: palegoldenrod; */
}

/* .rightlist_videolist .list::-webkit-scrollbar{display: none;} */
.rightlist_videolist .list li {
    font-size: 13px;
    width: 100%;
    height: 30px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 1;
}

.rightlist_videolist .list li:hover a {
    color: #0aaeec;
}

.rightlist_videolist .list li a {
    width: 100%;
    display: grid;
    grid-template-columns: 0.6fr 4fr 1fr;

    &.now {
        color: #0aaee0;
    }
}

.rightlist_videolist .list li a .title {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;

}
</style>

