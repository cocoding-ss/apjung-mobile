import Axios from 'axios';

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

interface AuthApiService {
    register(request: RegisterRequest) : void;
    login(request: LoginRequest) : void;
}

class AuthApiServiceImpl implements AuthApiService {
    register(request: RegisterRequest): void {
        Axios.post('/auth/register', request)
    }

    login(request: LoginRequest): void {
        Axios.post('/auth/login', request)
            .then((res) => {
                console.log(res.data);
            });
    }
}

export default AuthApiServiceImpl;
