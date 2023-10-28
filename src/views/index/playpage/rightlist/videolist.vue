<template>
    <div class="rightlist_videolist">
        <div class="header">
            <div class="videos">
                <span>视频选集</span>
                <span>(23/33)</span>

            </div>
            <div class="playauto">
                <span>自动连播</span>
                <el-switch v-model="value3" inline-prompt active-text="是" inactive-text="否" />
            </div>

        </div>
        <ul class="list">
            <li v-for="(li, index) in list">
                <router-link :to="li.href">
                    <span class="index">P{{ li.index }}</span>
                    <span class="title">{{ li.title }}</span>
                    <span class="duration">{{ li.duration }}</span>
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
// #endregion

// #region  模拟数据 mockjs
const value3 = ref(true)
import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const list = reactive([])
//#endregion
onMounted(() => {
    const id = route.params.id
    console.log(id)
    list.length = 0;
    list.push({
        id: mock('@id'),
        index: 1,
        title: mock('@cword(4,50)'),
        duration: parseInt(mock('@integer(3,30)')) + ':' + parseInt(mock('@integer(1,59)')),
        href: `/play/${id}`
    })
    for (let i = 1; i < parseInt(mock('@integer(2,30)')); i++) {
        const video = {
            id: mock('@id'),
            index: i + 1,
            title: mock('@cword(4,50)'),
            duration: parseInt(mock('@integer(3,30)')) + ':' + parseInt(mock('@integer(1,59)')),
            href: `/play/${mock('@id()')}`
        }
        list.push(video);
    }
})
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

    &.router-link-exact-active {
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

