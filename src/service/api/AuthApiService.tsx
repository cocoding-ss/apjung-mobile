import Axios from 'axios';
import CredentialsService from "../credentials/CredentialsService";
import {Actions} from "react-native-router-flux";

type RegisterRequest = {
    email: string,
    password: string,
    name: string,
    mobile: string
}

type LoginRequest = {
    email: string,
    password: string
}

type LoginResponse = {
    token: string,
    tokenType: string,
}

interface AuthApiServiceI {
    register(request: RegisterRequest) : void;
    login(request: LoginRequest) : void;
}

class AuthApiService implements AuthApiServiceI {
    private credentialsService : CredentialsService;

    constructor() {
        this.credentialsService = new CredentialsService();
    }

    async register(request: RegisterRequest): Promise<void> {
        try {
            await Axios.post('/auth/register', request);
        } catch (e) {
            console.log('======= 회원가입 실패 ========');
            console.log(e);
        }
    }

    async login(request: LoginRequest): Promise<void> {
        try {
            const res : LoginResponse = (await Axios.post('/auth/login', request)).data;

            await this.credentialsService.storeAccessToken(res.token);
            Axios.defaults.headers['Authorization'] = `${res.tokenType} ${res.token}`;
            Actions.replace('app');
        } catch (e) {
            console.log('======= 로그인에 실패했습니다 =======');
            console.log(e);
        }
    }
}

export default AuthApiService;
