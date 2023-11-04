<template>
  <form>
        <div class="header">
            <h3>{{ 0}} 个视频 共 {{ 0 }} MB
                <span>
                    剩余{{ 0 }}集 且容量{{ 0
                    }}MB</span>
            </h3>
            <label class="add" for="add">添加视频</label>
            <input id="add" multiple 
            @change="addvideos"
             type="file" accept=".mp4 , .flv , .mkv" style="display: none;">
        </div>
        <div class="form">
            <ul class="videos">
                <li v-for="(video, index) in videos">
                    <div class="icon">
                        <i class="colourless bofangshu"></i>
                    </div>
                    <div class="desc">
                        <div class="title">
                            <div style="display: flex;align-items: flex-end;">
                                <h4 >
                                    <!-- {{ file.name }} -->
                                    视频{{ index }}
                                       </h4>
                                <span style="font-size: 13px; color: #99a299;flex-shrink: 0;margin-left: 10px;">类型:
                                    mp4</span>
                            </div>
                            <div class="setting">
                                <span style="margin-right: 20px;color: #99a299;font-size: 14px;">{{
                                 "80MB"}}</span>
                                <!-- <i class="colourless bofangqi-zanting" title="暂停上传"></i> -->
                                <!-- <i class="colourless shuayishua" title="重新上传"></i> -->
                                <i class="colourless guanbi"
                                   
                                    title="取消上传"></i>
                            </div>
                        </div>
                        <!-- <div class="jindu"></div> -->
                    </div>
                </li>
            </ul>
            <ul class="text">
                <li>
                    <div class="title">封面</div>
                    <div class="content img">

                        <img class="videoupload_img" src="@\assets\images\初夏之星.png" alt="">
                        <input accept=".jpg , .jpeg , .png" type="file" id="videoupload_img" 
                            style="display: none;">
                        <label for="videoupload_img">点击更换封面</label>
                    </div>
                </li>
                <li>

                    <label class="title" for="title" >标题</label>
                    <div class="content c1">
                        <input id="title" type="text" maxlength="100"
                            placeholder="请输入标题">
                        <span>{{ '8/100'}}</span>
                    </div>
                </li>
                <li>
                    <div class="title">类型</div>
                    <div class="content c2">
                        <div>
                            <input type="radio" value="zizhi"
                                name="type"><span>自制</span>
                        </div>
                        <div class="zz">
                            <input type="radio"  value="zhuanzai" name="type"><span
                                style="margin-right: 10px;">转载</span>
                            <input type="text" 
                                placeholder="转载请注明出处">
                        </div>

                    </div>
                </li>
                <li>
                    <div class="title">分区</div>
                    <div class="content c3">
                        <span class="now" >
                            {{
                            "影视"
                            }}
                        </span>
                        <div class="list" >
                            <ul class="category">

                                <li 
                                   v-for="( index) in 7">{{ '影视杂谈' }}</li>
                            </ul>
                            <ul class="content">
                                <li 
                                   
                                    v-for="li in 7 ">
                                    <h3>{{"你好"}}</h3>
                                    <p >{{'暂无简介' }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <label class="title" for="tags" style="align-self: flex-start;">标签</label>
                    <div class="content c4">
                        <div class="input">
                            <ul class="tags">
                                <span title="点击删除"
                                  v-for="tag in 7" class="tag">{{ '标签'
                                    }}</span>
                            </ul>
                            <input type="text" id="tags" ref="videoupload_tags"
                                placeholder="按下enter键添加,点击标签删除                                  标签长度要不大于10个字">
                            <span class="sys">还可以添加{{ 6 }}个标签</span>
                        </div>

                    </div>
                </li>
                <li>
                    <label for="deatils" class="title" style="align-self: flex-start;">简介</label>
                    <div class="content c5">
                        <textarea id="deatils" maxlength="1000" cols="30" rows="10"
                            placeholder="输入视频简介"></textarea>
                    </div>
                </li>
                <div class="submit">
                    <input type="button" @click.prevent="" value="立即投稿">
                </div>
            </ul>
        </div>
    </form>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,defineEmits} from 'vue'
import {useRoute,useRouter} from 'vue-router'
const route=useRoute()
const router=useRouter()
// #endregion
//#region  接收父组件传过来的数据 只读
const {config,
    cover,videos,form}=defineProps({
    config:Object,
    cover:Object,
    videos:Array,
    form:Object
})
//#endregion
//#region 子组件给父组件传值
const emit=defineEmits(['addvideos'])
const addvideos=(el)=>{
 
emit('addvideos',el)
}
//#endregion
// #endregion



// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped lang="less">
form {
    /* background-color: bisque; */
    /* height: 100%; */
    width: 100%;
}

form .header {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e6e7e8;
}

form .header h3 {
    font-weight: normal;
    margin-right: 20px;
    font-size: 20px;

    span {

        color: #99a299;
        font-size: 13px;
        // margin-left: 20px;
    }
}

form .header .add {
    color: #fff;
    cursor: pointer;
    background-color: #0aaee0;
    padding: 5px 10px;
    border-radius: 6px;
}

.form {
    height: 100%;
    width: 100%;
    padding-left: 50px;
    /* background-color: cadetblue; */
}

.form :has(>input[type='text']:focus) {
    border-color: #0aaee0;
}

.form .c5 textarea:focus {
    border: 2px solid #0aaee0;
}

.videos {
    max-height: calc(60px * 5);
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

.text {
    margin-top: 20px;
    width: 100%;
    /* height: 6000px; */
    height: 600px;
    /* background-color: blueviolet; */
}

.text>li {
    margin-bottom: 30px;
    display: grid;
    width: 100%;
    grid-template-columns: 200px 1fr;
    justify-content: flex-start;
    align-items: center;
}

.text li .title {
    position: relative;
    font-size: 20px;
    font-weight: normal;
}

.text li .c1 {
    border: 2px solid #e6e7e8;
    border-radius: 6px;
    min-height: 40px;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}

.c1 input {
    height: 80%;
    width: 90%;
    /* background: none; */
}

.c2 {
    display: flex;
    align-items: center;
    // background-color: aquamarine;
    height: 40px;
}

.c2>div {

    margin-right: 20px;
    font-size: 20px;
    color: #61666d;
}

.c2 .zz {
    height: 100%;
    align-items: center;
    display: flex;

}

.c2 .zz input[type='text'] {
    height: 80%;
    flex-shrink: 0;
    background-color: #fcfae0;
    border: 1px solid #e6e7e8;
    padding-left: 5px;
}

.c2 .zz input[type='text']:focus {

    border: #0aaee0 2px solid;
}

.c2 .zz input[type='text'][disabled] {
    background-color: #99a299;
}

.c3 {
    position: relative;

    .now {
        border: #61666d 1px solid;
        padding: 3px 10px;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            color: #0aaee0;
            border-color: #0aaee0;
        }

    }

    .list {
        border-radius: 8px;
        background-color: #fff;
        top: 30px;
        border: 2px solid #61666d;
        max-width: 500px;
        max-height: 200px;
        position: absolute;
        // background-color: aquamarine;

        display: flex;

        .category {
            flex-grow: 1;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            overflow: auto;

            li {
                padding: 10px 50px;
                padding-left: 10px;
                cursor: pointer;
                text-overflow: ellipsis;

                &:hover {
                    color: #0aaee0;
                }
            }
        }

        .content {
            overflow: auto;

            display: flex;
            flex-direction: column;
            // background-color: orange;
            padding-left: 10px;
            padding-right: 100px;

            li {
                &:hover {
                    color: #0aaee0;
                }

                cursor: pointer;
                padding: 8px 0;
                display: flex;
                align-items: center;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                white-space: nowrap;

                h3 {
                    font-weight: normal;
                    font-size: 20px;
                    margin-right: 20px;
                }

                p {

                    color: #99a299;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                    white-space: nowrap;
                }
            }
        }
    }
}



.c4 .input {
    height: 40px;
    width: 100%;
    border: 2px solid #e6e7e8;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.c4 .input .tags {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.c4 .input .tag {
    cursor: pointer;
    margin: 0;
    display: inline;
    flex-shrink: 0;
    color: #fff;
    background-color: #0aaee0;
    font-size: 13px;
    padding: 2px;
    border-radius: 4px;
    margin-right: 3px;
}

.c4 .input input {
    // padding-left: 5px;
    width: 80%;
    height: 90%;
}

.c4 .input span.sys {
    flex-shrink: 0;
    color: #99a299;
}

.c4 .tag {
    /* background-color: aqua; */
    margin-top: 20px;
}

.c4 .tag .t,
.c4 .tag .hua {

    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 100px auto;
}

.c4 .tag .t .list {
    display: flex;
    justify-content: flex-start;
    /* background-color: blueviolet; */
    flex-wrap: wrap;
}

.c4 .tag li {
    background-color: #0aaee0;
    color: #fff;
    margin-bottom: 20px;
}

.c4 .tag .t .list li {

    cursor: pointer;
    width: auto;
    display: inline-block;
    margin-right: 10px;
    padding: 3px 5px;
    border-radius: 4px;
}

.c4 .tag .hua .hualist {
    display: flex;
    justify-content: flex-start;
    /* background-color: greenyellow; */
    flex-wrap: wrap;
}

.c4 .tag .hua .hualist li {
    cursor: pointer;
    /* background-color: burlywood; */

    width: auto;
    display: inline-block;
    margin-right: 10px;
    padding: 3px 5px;
    border-radius: 4px;
}

.c5 textarea,
.c5 textarea:focus {
    outline: none;
    width: 80%;
    border: 1px solid #99a299;
}

.submit input {
    padding: 10px;
    background-color: #0aaee0;
    color: #fff;
    border: none;
    border-radius: 6px;
}

.text .img {

    aspect-ratio: 16/9;
    height: 100px;
    /* background-color: gold; */
    position: relative;
}

.text .img label {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    padding: 5px 0;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 13px;

    &:hover {
        background: rgba(0, 0, 0, 0.6);
    }
}
</style>
