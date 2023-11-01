import axios from "@/utils/axios";
import md5 from "js-md5";
import { useUserStore} from '@/pinia/userStore'
import {usevideouploadstore} from '@/pinia/videouploadstore'
export async function GetCategoryAndSubarea() {
    return await axios.get('/api/uploadvideo/CategoryAndSubarea').then(req => {
        return req.data;
    }).catch(e => {
        console.log(e);
    })

}
//#region  上传表单
/**
 * 上传表单
 */
export async function uploadFrom(form) {
    const userStore=useUserStore()
    const key=form.title+'#'+userStore.user.id+'#'+form.cid+'#'+form.sid+'#'+form.size
    console.log(key)
    form.md5=md5(key)
    await axios.post('/api/uploadvideo/UploadFrom',
        form
        )
}
//#endregion


//#region  上传封面 cover
/**
 * 上传视频封面
 * @param {*} cover 
 */
export async function uploadCover(cover,form) {
    if (!cover) {
        console.log("封面不存在");
        return;
    }
    const formData = new FormData();
    formData.append("cover", cover);
    await axios.post('/api/uploadvideo/Cover/'+form.md5,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )
}
//#endregion
//#region  视频文件上传
/**
 * 视频文件上传
 * @param {*} videos 
 */
export async function uploadVideos(videos) {
    if (!videos || videos.length == 0) {
        console.log("视频不存在");
        return
    }
    const videolist=[]
    for (let video of videos) {
 
       videolist.push(uploadvideo(video))
    }
    Promise.all(videolist).then(()=>{
        // console.log('所有视频上传完成');
        //发送写入数据库请求

    })
}
export async function uploadvideo(video) {   
    const fileChunks = []
    //每个分片文件大小
    const blockSize = 1024 * 1024
    //读取起始位置
    let fileStreamPos = 0
    let endPos = 0
    // console.log(video)
    let i = 0;
    //每一集的每一分片的MD5都是相同的
    const videoMd5 = md5(video.name + video.size)
    while (fileStreamPos < video.size) {
        const chunk = {
            file: video.slice(fileStreamPos, endPos),
            start: fileStreamPos,
            end: endPos,
            PartNumber: i,
            Total: video.size,
            FileName: video.name,
            videoMd5:videoMd5
        }

        fileChunks.push(chunk)
        // console.log(video)
        i++
        fileStreamPos = endPos;
        endPos = fileStreamPos + blockSize;
    }
  
    //分片总数
   
    // console.log(fileChunks)
    let ii = 0
    const axioslist = []
    for (let chunk of fileChunks) {
        const form = new FormData()
        chunk.chunks = fileChunks.length
     
        form.append("file", chunk.file)
        delete chunk.file
        //   console.log(chunk)
        let querystring = '?'
        Object.keys(chunk).forEach(key => {
            querystring += key + '=' + chunk[key]
            querystring += "&"
        })

     axioslist.push(   axios.post('/api/uploadvideo/Chunk' + querystring,
            form,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(req=>{
            const videoStore=usevideouploadstore()
            videoStore.uploadvideo(video.name)
        })
        )
      

       

    }
 return   await axios.all(axioslist).then(async() => {
        //每一集的全部分片上传成功后 发出合并请求
        const mergeform = {
            FileName: video.name,
            VideoMd5:videoMd5,
            Total: video.size,
            chunks: fileChunks.length,
            Type:video.name.substring(video.name.lastIndexOf("."))
        }       
      await  axios.post('/api/uploadvideo/mergeform',   
        mergeform,
        ).then(req=>{
         
            console.log('成功上传'+video.name)
           
        })
    })
}
//#endregion


