import React from 'react';
import {View} from 'react-native';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import TextBottomInput from '../../../components/TextBottomInput';
import Button from '../../../components/Button';
import {postDataUseFetch} from '../../../libs/fetchApi';
import {setData,getData} from '../../../libs/Storage';

const _URL = 'https://thuctapgratiot.herokuapp.com/login';
const _METHOD = 'POST';

export default function Login({navigation}) {
    console.log('login');
    const inputRefUsername = React.createRef();
    const inputRefPW = React.createRef();
    // const [username,setUsername] = useState(null);
    // const [password,setPassword] = useState(null);
    const handleOnPressBtn =async () => {
        console.log('handleOnPressBtn');
        console.log(inputRefUsername.current.state.username);
        console.log(inputRefPW.current.state.password);
        try{
            async function fetchData(){
                console.log('async fc')
                const result = await postDataUseFetch(_URL,_METHOD,{
                                callingCode : 84,
                                phone : inputRefUsername.current.state.username,
                                pword :inputRefPW.current.state.password
                })
                const json = await result.json();
                console.log(json.data.token);
                // if(json.data.token){
                //     console.log(json.data.token)
                //     setData(admin,json.data.token);
                // }
            }
            fetchData();
        }
        catch (error) {
            console.error(error);
        }
    }

    const laydata = () => {
        getData(admin)
    }
    

    return <View>
                <Header title="Beer App" textLoginWithG="Đăng nhập" textOr="Hoặc"/>
                <Input 
                    isPWord={false} 
                    placeholder="Tên đăng nhập"
                    ref={inputRefUsername}
                />
                <Input 
                    isPWord={true}
                    placeholder="Mật khẩu"
                    ref={inputRefPW}
                />
                <TextBottomInput 
                    textRight="Đăng ký"
                    onPress={() => navigation.navigate('Register')}
                />
                <Button 
                    titleButton="Đăng nhập"
                    onPress={handleOnPressBtn}
                />
                <Button 
                    titleButton="lay data"
                    onPress={laydata}
                />
            </View>
}

