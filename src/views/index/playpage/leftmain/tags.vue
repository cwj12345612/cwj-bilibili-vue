<template>
    <ul class="leftmain_tags sq">
        <li v-for="tag in tags" class="tag">
            <router-link rel="opener" :to="tag.route" target="_blank">
                <i :class="!tag.type ? null :
                    tag.type != 'channel' ? null :
                        'colourless fenquxuanzhong'"></i>
                <span>{{ tag.name }}</span>
            </router-link>
        </li>
        <li class="more" @click="changeHeight">
            <i class="colourless xialaxiao"></i>
        </li>

    </ul>
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
import { GetVideolistTagsType } from '@/api/views/playpage'


// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion
const changeHeight = (e) => {

    const ul = e.currentTarget.parentElement

    if (ul.className.indexOf('sq') > -1) {
        ul.classList.remove('sq')
        ul.classList.add('zk')
    } else {
        ul.classList.add('sq')
        ul.classList.remove('zk')
    }
}
//#region  tags
const tags = reactive([
    // {
    //     name:'游戏',
    //     // 频道 分区 类别 普通(null)
    //     type:null,
    //     route:'/search?text='+'游戏',
    // },
])
const props = defineProps({
    channels: String
})
watch(() => props.channels, () => {
    tags.length = 0
    const cha = props.channels.split('#')

    if (cha == null || cha.length == 0) {

        return
    }
    let cs = cha.filter(name => name != '')
    //模拟数据用
    //    cs=['王者荣耀','英雄联盟','我的世界','游戏集锦','玩游戏']
    //
    cs.forEach(name => {
        tags.push({
            name: name,
            route: '/search?text=' + name,
        })
    });
    //获取标签
    GetVideolistTagsType(route.params.id, cs)
        .then(list => {
            list.reverse()
            list.forEach(li => {
                const name = li.name
                const tag = tags.find(t => t.name == name)
                if (tag) {
                    tag.route = li.route
                    tag.type = li.type
                } else {
                    tags.unshift(li)
                }
            })

        })
})

//#endregion
</script>
<style scoped>
.leftmain_tags {
    width: 100%;
    /* height: 100px; */
    /* background-color: aqua; */
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
    padding-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
    border-bottom: 2px solid #f1f2f3;
}

.leftmain_tags.sq {
    height: 36px;
}

.leftmain_tags.zk {
    height: auto;
}

.leftmain_tags li {
    background-color: #f1f2f3;
    color: #61666d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.leftmain_tags li.tag {
    margin-bottom: 8px;
    border-radius: 12px;
    height: 28px;
    padding: 0 12px;

    margin-right: 8px;
}

li.more {
    right: 0;
    top: 0;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;

}
</style>
