import {Dimensions, PixelRatio} from 'react-native'

const responsiveWidth = inputWidth => {

  const screenWidth = Dimensions.get('window').width
  if(typeof inputWidth === 'string'){
    const parsedWidth = parseFloat(inputWidth)
    return PixelRatio.roundToNearestPixel( screenWidth * parsedWidth / 100 )
  }else{
    return screenWidth * ( inputWidth / 100 )
  }

}

const responsiveHeight = inputHeight => {

  const screenHeight = Dimensions.get('window').height
  if(typeof inputHeight === 'string'){
    const parsedHeight = parseFloat(inputHeight)
    return PixelRatio.roundToNearestPixel( screenHeight * parsedHeight / 100 )
  }else{
    return screenHeight * ( inputHeight / 100 )
  }

}

const responsiveFontSize = fontSize => {

  const { height, width } = Dimensions.get('window')
  if(typeof fontSize === 'string'){
    const parsedFontSize = parseFloat(fontSize)
    const convertResult = Math.sqrt(( height * height ) + ( width * width )) * ( parsedFontSize / 100 )
    return PixelRatio.roundToNearestPixel(convertResult)
  }else{
    return Math.sqrt(( height * height ) + ( width * width )) * ( fontSize / 100 )
  }

}

const responsiveSize = inputSize => {

  const { height, width } = Dimensions.get('window')
  if(typeof inputSize === 'string'){
    const parsedFontSize = parseFloat(inputSize)
    const convertResult = Math.sqrt(( height * height ) + ( width * width )) * ( parsedFontSize / 100 )
    return PixelRatio.roundToNearestPixel(convertResult)
  }else{
    return Math.sqrt(( height * height ) + ( width * width )) * ( inputSize / 100 )
  }

}

export {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  responsiveSize
};