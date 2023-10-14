//文件读取相关工具函数

export  function readBuffer(file, start = 0, end = 2) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('f')
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file.slice(start, end));
    });
  }
  function check(headers) {
    return (buffers, options = { offset: 0 }) =>
      headers.every(
        (header, index) => header === buffers[options.offset + index]
      );
  }
export const isPNG = check([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]); // PNG图片对应的魔数  
export const isJPEG = check([0xff, 0xd8, 0xff])

  /**
   * 读取文件大小 返回用户能看懂的单位 MB
   * 
   * @param {*} file 
   */
export function fileSzieToString(file) {
  let str='';
 const size= file.size; 
if(size/(1024*1024*10)>=1){
  str+=parseInt(size/(1024*1024))+'MB';
}else{
  throw "文件太小 请上传的文件超过10MB"
}
// console.log(str)
return str
}