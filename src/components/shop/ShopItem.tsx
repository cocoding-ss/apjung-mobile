import React from "react";
import styled from "styled-components/native";
import {Image, ImageSourcePropType, ImageURISource, Text} from "react-native";

const Container = styled.View`
    
`;

type Prop = {
    id: number,
    name: string,
    overview: string,
    pv: number,
    uv: number,
    thumbnailUri: string,
};

const ShopItem = (props: Prop) => {
    const thumbnailUri = props.thumbnailUri ? props.thumbnailUri.replace('https', 'http') : '';

    return (
        <>
            <Image style={{width: '10%', height: '10%'}} source={{uri: thumbnailUri}} />
            <Text>{props.name}</Text>
        </>
    );
};

export default ShopItem;
