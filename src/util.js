import unavailableImage from "./img/unavailable-image.jpeg"
//MEDIA RESIZE
 export const smallImage = (imagePath, size) => {
    if(imagePath){
      const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace("media/screenshots",`media/resize/${size}/-/screenshots`)
      : imagePath.replace("media/games/",`media/resize/${size}/-/games/`)
      return image
    }else{
       return unavailableImage
    }
 }