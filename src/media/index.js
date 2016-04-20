import {
  addNews, uploadMaterial, uploadNewsImage,
    updateNews,
    getMaterialUrl, downloadMaterial,
    getMaterialCount, getMaterialList,
    deleteMaterial
} from './material'

import {
  uploadTempMedia,
  getTempMediaUrl, downloadTempMedia

} from './tempMedia'

const Media = function(core){
  return {
    // material
    addNews: addNews(core),
    uploadMaterial: uploadMaterial(core),
    uploadNewsImage: uploadNewsImage(core),
    updateNews: updateNews(core),
    getMaterialUrl: getMaterialUrl(core),
    downloadMaterial: downloadMaterial(core),
    getMaterialCount: getMaterialCount(core),
    getMaterialList: getMaterialList(core),
    deleteMaterial: deleteMaterial(core),
    // tempMedia
    uploadTempMedia: uploadTempMedia(core),
    getTempMediaUrl: getTempMediaUrl(core),
    downloadTempMedia: downloadTempMedia(core)
  }
}

export default Media