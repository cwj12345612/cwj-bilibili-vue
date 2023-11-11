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
      },
      
//#region 前后端弹幕格式转换
//处理前端向后端发送弹幕 弹幕进行格式化
 toDanmuEntity : (comment) => {

    const danmu = {}
    for (let key of Object.keys(comment)) {
        const type = typeof comment[key]
        if (type != 'object') {
            danmu[key] = comment[key]
        } else {
            const f = comment[key]
            for (let kk of Object.keys(f)) {
                danmu[key + '_' + kk] = f[kk]
            }
        }
    }
    delete danmu.id
    return danmu
},
// 前端向后端请求弹幕
 toCommentAJax : (danmuEntity) => {

    const comment = {
        duration: danmuEntity.duration,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
        id: JSON.stringify(danmuEntity.duration+'#'+danmuEntity.start+'#'+danmuEntity.txt),               //弹幕id，需唯一
        // start: parseInt(player.currentTime*1000),           //弹幕出现时间, 单位：ms 毫秒
        start: danmuEntity.start,
        prior: danmuEntity.prior,          //该条弹幕优先显示，默认false
        color: danmuEntity.color,          //该条弹幕为彩色弹幕，默认false
        txt: danmuEntity.txt,              //弹幕文字内容
        style: {                 //弹幕自定义样式
            color: danmuEntity.style_Color,         //例：'#ff9500',
            fontSize: danmuEntity.style_Fontsize,      // 例：'20px',
            padding: danmuEntity.style_Padding      //例： 2px 11px',
        },
        mode: null,           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
    }
    switch (danmuEntity.mode) {
        case 0:
            comment.mode = 'scroll'
            break;
        case 1:
            comment.mode = 'bottom'
            break;
        case 2:
            comment.mode = 'center'
            break;
        case 3:
            comment.mode = 'top'
            break;
        default:
            comment.mode = 'scroll'
            break;
    }
    // console.log('轮询#'+comment.txt+'#'+JSON.stringify(Object.values(danmuEntity)));
    return comment
},
// websocket接收后端主动发过来的弹幕
 toCommentWebsocket :(danmuEntity) => {
   
    const comment = {
        duration: danmuEntity.Duration,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
        id: JSON.stringify(danmuEntity.Duration+'#'+danmuEntity.Start+'#'+danmuEntity.Txt),               //弹幕id，需唯一
        // start: parseInt(player.currentTime*1000),           //弹幕出现时间, 单位：ms 毫秒
        start: danmuEntity.Start,
        prior: danmuEntity.Prior,          //该条弹幕优先显示，默认false
        color: danmuEntity.Color,          //该条弹幕为彩色弹幕，默认false
        txt: danmuEntity.Txt,              //弹幕文字内容
        style: {                 //弹幕自定义样式
            color: danmuEntity.Style_Color,         //例：'#ff9500',
            fontSize: danmuEntity.Style_Fontsize,      // 例：'20px',
            padding: danmuEntity.Style_Padding      //例： 2px 11px',
        },
        mode: null,           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
    }
    switch (danmuEntity.Mode) {
        case 0:
            comment.mode = 'scroll'
            break;
        case 1:
            comment.mode = 'bottom'
            break;
        case 2:
            comment.mode = 'center'
            break;
        case 3:
            comment.mode = 'top'
            break;
        default:
            comment.mode = 'scroll'
            break;
    }
    // console.log('web发送#'+comment.txt+'#'+JSON.stringify(Object.values(danmuEntity)))
    return comment
}

//#endregion

}


