import React from "react";
import {Text} from "react-native";
import {Actions} from "react-native-router-flux";

interface Props {}
interface State {}
class SplashPage extends React.Component<Props, State> {
    async componentDidMount() {
        await setTimeout(() => {
            Actions.replace("login");
        }, 2000);
    }

    render() {
        return (
            <>
                <Text>Splash</Text>
            </>
        )
    };
}


export default SplashPage;
