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
           return Number((count /(10*10*10*10)).toFixed(2))+'万'
        }
        return ''
    },
    uuid:()=> {
        var temp_url = URL.createObjectURL(new Blob());
        var uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
        URL.revokeObjectURL(temp_url);
        return uuid.substr(uuid.lastIndexOf("/") + 1);
      }
}


