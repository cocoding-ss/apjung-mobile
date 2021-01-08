import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

interface CredentialsServiceI {
    storeBothToken(accessToken: string, refreshToken: string) : Promise<void>;
    storeAccessToken(accessToken: string) : Promise<void>;
    storeRefreshToken(refreshToken: string) : Promise<void>;

    setHeader(accessToken : string) : void;
    flushHeader() : void;

    getAccessToken() : Promise<string | null>;
    getRefreshToken() : Promise<string | null>;
}

class CredentialsService implements CredentialsServiceI {
    private accessTokenName = 'accessToken';
    private refreshTokenName = 'refreshToken';

    async getAccessToken(): Promise<string | null> {
        return await AsyncStorage.getItem(this.accessTokenName);
    }

    async getRefreshToken(): Promise<string | null> {
        return await AsyncStorage.getItem(this.refreshTokenName);
    }

    setHeader(accessToken : string) : void {
        Axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    flushHeader() : void {
        Axios.defaults.headers['Authorization'] = '';
    }

    async storeAccessToken(accessToken: string): Promise<void> {
        await AsyncStorage.setItem(this.accessTokenName, accessToken);
    }

    async storeRefreshToken(refreshToken: string): Promise<void> {
        await AsyncStorage.setItem(this.refreshTokenName, refreshToken);
    }

    async storeBothToken(accessToken: string, refreshToken: string): Promise<void> {
        await this.storeAccessToken(accessToken);
        await this.storeRefreshToken(refreshToken);
    }
}

export default CredentialsService;
