import axios from "@/utils/axios";
import md5 from "js-md5";
import { useUserStore } from '@/pinia/userStore'

export async function GetCategoryAndSubarea() {
    return await axios.get('/api/uploadvideo/CategoryAndSubarea').then(req => {
        return req.data;
    }).catch(e => {
        return []
    })

}
//#region  上传表单
/**
 * 上传表单
 */
export async function uploadFrom(form) {
    const userStore = useUserStore()

    form.md5 = md5(JSON.stringify(form))
    // console.log(form.md5)
    await axios.post('/api/uploadvideo/UploadFrom',
        form
    ).then(req => {
        // console.log(req.data)
        //存入浏览器session备用
        const upvideolist = JSON.stringify(req.data)
        sessionStorage.setItem('upvideolist', upvideolist)
    })
}
//#endregion


//#region  上传封面 cover
/**
 * 上传视频封面
 * @param {*} cover 
 */
export async function uploadCover(cover, form) {
    if (!cover) {
        console.log("封面不存在");
        return;
    }
    const formData = new FormData();
    formData.append("cover", cover);
    await axios.post('/api/uploadvideo/Cover/' + form.md5,
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
    //   console.log(videolist)
    for (let video of videos) {
        await uploadvideo(video)
    }
}
export async function uploadvideo(video) {

    const fileChunks = []
    //每个分片文件大小
    const blockSize = 1024 * 1024
    //读取起始位置
    let fileStreamPos = 0
    let endPos = blockSize
    // console.log(video)
    let i = 0;
    //每一集的每一分片的MD5都是相同的
    const videoMd5 = md5(JSON.parse(sessionStorage.getItem('upvideolist'))?.md5 + video.name + video.size)
    while (fileStreamPos < video.size) {
        const chunk = {
            file: video.slice(fileStreamPos, endPos),
            start: fileStreamPos,
            end: endPos,
            PartNumber: i,
            Total: video.size,
            FileName: video.name,
            videoMd5: videoMd5
        }

        fileChunks.push(chunk)

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

        axioslist.push(axios.post('/api/uploadvideo/Chunk' + querystring,
            form,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(req => {
            //修改视频上传进度

        })
        )




    }

    //  return   await axios.all(axioslist).then(async() => {
    //   const du=  new Promise((resolve)=>{
    //         const videoElement = document.createElement('video');
    //         videoElement.src = URL.createObjectURL(video);
    //         videoElement.addEventListener('loadedmetadata', function() {
    //           resolve(
    //            videoElement.duration,
    //           );
    //         });
    //     })
    //    const duration= parseInt(await du)
    //         //每一集的全部分片上传成功后 发出合并请求
    //         const mergeform = {
    //             FileName: video.name,
    //             VideoMd5:videoMd5,
    //             size: parseInt(video.size /(1024*1024)),
    //             duration:duration,
    //             chunks: fileChunks.length,
    //             Type:video.name.substring(video.name.lastIndexOf("."))
    //         }       
    //         // console.log(mergeform)
    //       await  axios.post('/api/uploadvideo/mergeform?formMd5='+JSON.parse(sessionStorage.getItem('upvideolist'))?.md5,   
    //         mergeform,
    //         ).then(req=>{  

    //             // console.log('成功上传'+video.name)
    //         //    console.log(req.data)
    //         })
    //     })
}
//#endregion
//#region 写入数据库
export async function WirteSql() {

    // console.log(JSON.parse(sessionStorage.getItem('upvideolist'))?.md5)
    const md5 = JSON.parse(sessionStorage.getItem('upvideolist'))?.md5

    axios.post('/api/uploadvideo/WirteSql?formmd5=' + md5)
        .then(req => {
            sessionStorage.removeItem("videolist")
            sessionStorage.setItem('uploadsucceed', JSON.stringify({ size: req.data.size, count: req.data.count }))

        })
}
//#endregion

