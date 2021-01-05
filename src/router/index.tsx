import React from "react";
import {Actions, Scene, Router, Stack} from "react-native-router-flux";
import Login from "../views/auth/Login";

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="login" component={Login} initial={true} hideNavBar={true} />

        <Scene
            key="app"
            tabs={true}
            headerMode="none"
            hideNavBar={true}
            wrap={false} >
            <Scene key="test1" component={Login} hideNavBar={true} />
            <Scene key="test2" component={Login} hideNavBar={true} />
            <Scene key="test3" component={Login} hideNavBar={true} />
            <Scene key="test4" component={Login} hideNavBar={true} />
        </Scene>
    </Scene>
);

export default scenes;
