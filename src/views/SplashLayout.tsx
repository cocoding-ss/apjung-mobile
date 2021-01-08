import React, {useEffect} from "react";
import {Text} from "react-native";
import AuthService from "../service/AuthService";

const SplashLayout = () => {
    const authService = new AuthService();
    authService.autoLogin();

    return (
        <>
            <Text>Splash</Text>
        </>
    )
}

export default SplashLayout;
