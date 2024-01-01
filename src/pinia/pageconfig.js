//页面参数相关属性 
import { defineStore } from 'pinia'
import { dataUtils } from '@/utils/dataUtils'
export const usepageconfigStore = defineStore('pageconfigStore', {
    state: () => ({
        // 页面滚动距离
        scroll: 0,
       
        // 页面宽度
        width: 0,
        // 页面高度 自定义和宽度相等
        height: 0,
        //当前页面的name
        pagename: undefined,
    }),
    actions: {
        /**
         * 初始化页面宽度高度等 并监听对应js事件.
         * app组件挂载后调用
         */
        initproperty() {
            const app = document.querySelector('#app')
            // console.log('初始化页面')
            this.width = app.getBoundingClientRect().width
            this.height = this.width
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop
            let temp = null
            window.addEventListener('scroll', () => {
                             this.scroll = document.documentElement.scrollTop || document.body.scrollTop
// console.log(this.scroll)
            })
            window.addEventListener('resize', () => {
                this.width = app.getBoundingClientRect().width
                this.height = this.width

            })
        },
        /**
         * 设置当前页面name
         * @param {*} pagename 
         */
        setpagename(pagename){
            this.pagename=pagename
        }
    },
    getters: {
        /**
         * 动态设置元素高度和宽度
         * @returns 高度height 宽度width (非必须)
         */
        dynamicWH() {
           
            const normalWidth = 1425
            const normalHeight = 1425
            return (width, height) => {
                
                // {normal: , max:  ,min: ,}
                const style = {}
                if (width) {
                    const factor = width.normal / normalWidth
                    const temp = factor * this.width
                    if (temp > width.max) {
                        style.width = width.max
                    } else if (temp < width.min) {
                        style.width = width.min
                    } else {
                        style.width = temp
                    }
                    style.width = style.width + 'px'
                    //    console.log(JSON.stringify(style),factor,this.width,temp,JSON.stringify(width))
                }
                if (height) {
                    const factor = height.normal / normalHeight
                    const temp = factor * this.height
                    if (temp > height.max) {
                        style.height = height.max
                    } else if (temp < height.min) {
                        style.height = height.min
                    } else {
                        style.height = temp
                    }
                    style.height = style.height + 'px'
                }
                // console.log(JSON.stringify(style))
                console.log('使用动态：'+JSON.stringify(width)+'#'+JSON.stringify(height))
                
                return style
            }
        },
        //给元素添加部分的class 根据:  当前页面name  是否滚动scroll 等
        globalclass() {
            return [
                this.pagename,
                this.isscroll ? 'scroll' : undefined
            ]
        },
         //是否滚动
         isscroll(){
            return this.scroll>0
         }
    }
})