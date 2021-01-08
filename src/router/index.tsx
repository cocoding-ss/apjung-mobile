import React from "react";
import {Actions, Scene, Router, Stack} from "react-native-router-flux";
import LoginLayout from "../views/auth/LoginLayout";
import SplashLayout from "../views/SplashLayout";
import ShopLayout from "../views/shops/ShopLayout";
import MyLayout from "../views/mypage/MyLayout";
import PinLayout from "../views/pin/PinLayout";
import RegisterLayout from "../views/auth/RegisterLayout";

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="splash" component={SplashLayout} init={true} hideNavBar={true} />
        <Scene key="login" component={LoginLayout} hideNavBar={true} />
        <Scene key="register" component={RegisterLayout} hideNavBar={true} />

        <Scene
            key="app"
            tabs={true}
            headerMode="none"
            hideNavBar={true}
            wrap={false} >
            <Scene key="shop" init={true} component={ShopLayout} hideNavBar={true} />
            <Scene key="pin" component={PinLayout} hideNavBar={true} />
            <Scene key="mypage" component={MyLayout} hideNavBar={true} />
        </Scene>
    </Scene>
);

export default scenes;
