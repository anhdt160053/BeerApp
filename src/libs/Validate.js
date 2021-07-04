
const validatePWord = value => {
    if(value){
        const noticePWord = 'Mật khẩu không chính xác';
        const regPWord = /(?=.*[A-Za-z])?(?=.*\d)[A-Za-z\d]{6,}/;
      if(regPWord.test(value) === true){
          console.log('pw');
        return ''
      }else{
          return noticePWord
      }
    }
}

const  validatePhoneNumber= value => {
    const noticePhoneNumber = 'Số điện thoại không chính xác hoặc không tồn tại';
      const regUserName = /^[0]?[789]\d{8}$/;
      if(regUserName.test(value) === true){
          console.log('username');
        return ''
      }else{
          console.log('not username');
          return noticePhoneNumber
      }
}

export {
    validatePhoneNumber,
    validatePWord   
}