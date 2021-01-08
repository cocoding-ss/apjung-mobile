import React from "react";
import {Text} from "react-native";
import ShopService from "../../service/ShopService";

const ShopLayout = () => {
    const shopService = new ShopService();
    shopService.search({
        pageNum: 1,
        pageSize: 10,
        filter: {
            name: '테스트'
        },
        orderType: 'name'
    });

    return (
        <>
            <Text>Shop</Text>
        </>
    );
};

export default ShopLayout;
