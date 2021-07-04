
export const standarWidth = 360;
export const standardHeight = 592;
export const boxWidth =  300/standarWidth * width;
export const boxHeight = 450/standardHeight * height;
export const textFontSize = 14/standarWidth * width;
export const buttonTextFontSize = 14/standarWidth * width;
export const titleFontSize = 20/standarWidth * width;
export const buttonWidth = 150/standarWidth * width;
export const buttonHeight = 49/standardHeight * height;
export const lineHeight = 25/standardHeight * height;
export const marginBottom = 10/standardHeight * height;
export const padding = 10/standarWidth * width;
export const scale = size => width / standarWidth * size;
export const verticalScale = size => height / standardHeight * size;
export const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;