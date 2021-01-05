import React from 'react';
import {Button, Text} from "react-native";
import {Actions} from "react-native-router-flux";

class Login extends React.Component<any, any> {
    render() {
        return (
            <>
                <Text>Hello, world!</Text>
                <Button title={"HEllo"} onPress={() => {Actions.replace("app")}} />
            </>
        );
    }
}

export default Login;
