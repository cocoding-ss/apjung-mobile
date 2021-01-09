import Axios from 'axios';


type ShopSearchFilter = {
    name: string | null
}

type ShopSearchRequest = {
    pageNum: number,
    pageSize: number,
    orderType: string,
    'filter.name': string,
}

type ShopSearchItem = {
    id: number,
    name: string,
    overview: string,
    pv: number,
    uv: number,
    thumbnailUri: string | null,
}

interface ShopServiceI {
    search(request : ShopSearchRequest) : Promise<ShopSearchItem[] | void>
}

class ShopService implements ShopServiceI {
    async search(request : ShopSearchRequest): Promise<ShopSearchItem[] | void> {
        try {
            const res = await Axios.get('/shop/search', {
                params: request
            });

            return res.data;
        } catch (e) {
            console.log(e);
        }
    }
}

export default ShopService;
