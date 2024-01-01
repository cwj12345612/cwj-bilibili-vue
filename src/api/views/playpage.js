import axios from "@/utils/axios";
const prevurl = '/api/playpage/'
export async function GetvideoListTileAndData(id) {
  return await axios.get(prevurl + '/videoListTileAndData/' + id)
    .then(req => req.data)
}

export async function GetVideolistTagsType(id, tags) {
  let query = '?';
  for (let tag of tags) {
    query += 'tag=' + tag + '&'
  }
  // console.log(query)
  return await axios.get(prevurl + '/VideolistTagsType/' + id + query)
    .then(req => req.data)
}

export async function GetVideosByVideolistId(id) {
  // console.log(id)
  return await axios.get(prevurl + '/Videos/' + id)
    .then(req => req.data)
}

export async function GetToolbar(id, index) {
  return await axios.get(prevurl + '/toolbar/' + id + '/' + index)
    .then(req => req.data)
}