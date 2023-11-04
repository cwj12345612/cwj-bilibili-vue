//数据处理工具js

let temp=null
export default    {
   
    antishake_fun:(fun)=>{
        
        if(temp) {
            clearTimeout(temp)
        }
        temp=setTimeout(()=>{
    
            fun()
        },100)
    },
    /**
     * 把次数转成万制
     * @param {*} count 
     */
    toWan:(count)=>{

        if(count<=10*10*10*10) return count
        if(count<1000*10000) {
           return Number(count.toFixed(2))+'万'
        }
        return ''
    }
}


