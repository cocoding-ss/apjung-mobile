import React, {useEffect, useState} from "react";
import {Text} from "react-native";
import styled from "styled-components/native";
import AuthService from "../../service/api/AuthService";

const TopNav = styled.View`
    align-items: center;
    justify-content: center;
    height: 30px;
    
    background-color: #ff0000;
`;
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

const RegisterLayout = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const authApiService = new AuthService();

    return (
        <>
            <TopNav>
                <Text>뒤로가기</Text>
            </TopNav>
            <Container>
                <Input placeholder="이메일" value={email} autoCapitalize="none" onChangeText={(inputEmail) => setEmail(inputEmail)} />
                <Input placeholder="비밀번호" value={password} autoCapitalize="none" onChangeText={(inputPassword) => setPassword(inputPassword)} />
                <Input placeholder="이름" value={name} autoCapitalize="none" onChangeText={(inputName) => setName(inputName)}/>
                <Input placeholder="전화번호" value={mobile} autoCapitalize="none" onChangeText={(inputMobile) => setMobile(inputMobile)} />
                <RegisterButton onPress={() => {authApiService.register({email: email, password: password, name: name, mobile: mobile})}}>
                    <RegisterButtonText>회원가입</RegisterButtonText>
                </RegisterButton>
            </Container>
        </>
    );
};


export default RegisterLayout;
