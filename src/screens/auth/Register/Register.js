import React from 'react';
import {View} from 'react-native';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {setData} from '../../../libs/Storage';

export default function Register() {
    console.log('Register')
    const inputRefUsername = React.createRef();
    const inputRefEmail = React.createRef();
    const inputRefPhone = React.createRef();
    const inputRefPW = React.createRef();

    const hanleOnPressBtn = value => {
        console.log('inputRefUsername',inputRefUsername.current.state.username);
        console.log('inputRefEmail',inputRefEmail.current.state.email);
        console.log('inputRefPhone',inputRefPhone.current.state.phone);
        console.log('inputRefPW',inputRefPW.current.state.password);
    }
    return   <View>
                <Header title="Beer App" textLoginWithG="Đăng nhập" textOr="Hoặc"/>
                <Input 
                    isUserName={true} 
                    secureTextEntry={false}
                    placeholder="Tên đăng nhập"
                    ref={inputRefUsername}
                />
                <Input 
                    secureTextEntry={false}
                    isEmail={true}
                    placeholder="Địa chỉ Email"
                    ref={inputRefEmail}
                />
                <Input 
                    secureTextEntry={false}
                    isPhone={true}
                    placeholder="Số điện thoại"
                    keyboardType="phone-pad"
                    ref={inputRefPhone}
                />
                <Input 
                    isPWord={true}
                    placeholder="Mật khẩu"
                    ref={inputRefPW}
                />
                <Button 
                    titleButton="Đăng ký"
                    onPress={hanleOnPressBtn}
                />
            </View>
}
