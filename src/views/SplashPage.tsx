import React, {useEffect} from "react";
import {Text} from "react-native";
import {Actions} from "react-native-router-flux";

const SplashPage = () => {
    useEffect(() => {
        setTimeout(() => {
            Actions.replace("login");
        }, 2000);
    });

    return (
        <>
            <Text>Splash</Text>
        </>
    )
}

export default SplashPage;
