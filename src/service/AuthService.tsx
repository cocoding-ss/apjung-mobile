import Axios from 'axios';
import CredentialsService from "./CredentialsService";
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

type MeResponse = {
    email: string,
    name: string,
    mobile: string,
    roles: string[],
    emailAuth: boolean,
}

interface AuthServiceI {
    register(request: RegisterRequest) : Promise<void>;
    login(request: LoginRequest) : Promise<void>;
    me() : Promise<MeResponse | void>;
    autoLogin() : void;
}

class AuthService implements AuthServiceI {
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
            this.credentialsService.setHeader(res.token);
            Actions.replace('app');
        } catch (e) {
            console.log('======= 로그인에 실패했습니다 =======');
            console.log(e);
        }
    }

    async me(): Promise<MeResponse | void> {
        try {
            const res = await Axios.get('/auth/me');

            console.log(res.data);
            return res.data;
        } catch (e) {
            Actions.replace('login');
        }
    }

    async autoLogin() {
        const token : string | null = await this.credentialsService.getAccessToken()

        if (token) {
            console.log(token);
            this.credentialsService.setHeader(token);
            const res = await this.me();

            if (res) {
                Actions.replace('app');
            }} else {
            Actions.replace('login');
        }
    }
}

export default AuthService;
