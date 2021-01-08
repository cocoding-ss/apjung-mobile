import React, {useState} from 'react';
import {Actions} from "react-native-router-flux";

import styled from "styled-components/native";

import AuthService from "../../service/AuthService";

const Container = styled.View`
    flex: 1;
    background-color: #fafafa;

    align-items: center;
    justify-content: center;
`;

const Input = styled.TextInput`
    width: 300px;
        
    margin-bottom: 10px;
    padding: 10px;
    font-size: 14px;
    
    border: 2px solid #aaaaaa;
    border-radius: 15px;
`;

const LoginButton = styled.TouchableOpacity`
    width: 300px;
    
    margin-bottom: 10px;
    padding: 10px;
    background-color: #ff0000;
    
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

const LoginButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

const RegisterButton = styled.TouchableOpacity`
    width: 300px;
    
    padding: 10px;
    background-color: #aaaaaa;
    
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`;

const RegisterButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: white;
`;

const tryLogin = (email: string, password: string) => {
    const authApiService = new AuthService();
    authApiService.login({
        email: email,
        password: password
    });
}

const LoginLayout = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Container>
                <Input placeholder={"이메일"} value={email} onChangeText={(inputEmail: string) => setEmail(inputEmail)} autoCapitalize="none" />
                <Input placeholder={"비밀번호"} value={password} onChangeText={(inputPassword: string) => setPassword(inputPassword)} autoCapitalize="none" />
                <LoginButton onPress={() => {tryLogin(email, password)}}>
                    <LoginButtonText>로그인</LoginButtonText>
                </LoginButton>

                <RegisterButton onPress={() => { Actions.register() }}>
                    <RegisterButtonText>회원가입</RegisterButtonText>
                </RegisterButton>
            </Container>
        </>
    );
};

export default LoginLayout;

