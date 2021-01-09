import React, {useEffect, useState} from "react";
import {Text} from "react-native";
import ShopService from "../../service/ShopService";
import styled from "styled-components/native";
import ShopItem from "../../components/shop/ShopItem";

const shopService = new ShopService();
const ShopLayout = () => {
    const [shops , setShops] = useState([]);

    useEffect(() => {
        shopService.search({
            pageNum: 1,
            pageSize: 10,
            'filter.name' : '테스트',
            orderType: 'name'
        }).then((shops: any) => {
            if (shops) {
                setShops(shops);
            }
        });
    }, []);

    return (
        <>
            {
                shops.map((shop : any) => {
                    return (<ShopItem key={shop.id} id={shop.id} name={shop.name} overview={shop.overview} pv={shop.pv} uv={shop.uv} thumbnailUri={shop.thumbnailUrl} />);
                })
            }
        </>
    );
};

export default ShopLayout;
