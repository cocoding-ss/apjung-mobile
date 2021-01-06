import React from "react";
import {Actions, Scene, Router, Stack} from "react-native-router-flux";
import LoginPage from "../views/auth/LoginPage";
import SplashPage from "../views/SplashPage";
import ShopPage from "../views/shops/ShopPage";
import MyPage from "../views/mypage/MyPage";
import PinPage from "../views/pin/PinPage";

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="splash" component={SplashPage} init={true} hideNavBar={true} />
        <Scene key="login" component={LoginPage} hideNavBar={true} />

        <Scene
            key="app"
            tabs={true}
            headerMode="none"
            hideNavBar={true}
            wrap={false} >
            <Scene key="shop" init={true} component={ShopPage} hideNavBar={true} />
            <Scene key="pin" component={PinPage} hideNavBar={true} />
            <Scene key="mypage" component={MyPage} hideNavBar={true} />
        </Scene>
    </Scene>
);

export default scenes;
