import AsyncStorage from '@react-native-async-storage/async-storage';

interface CredentialsServiceI {
    storeBothToken(accessToken: string, refreshToken: string) : void;
    storeAccessToken(accessToken: string) : void;
    storeRefreshToken(refreshToken: string) : void;
    getAccessToken() : string;
    getRefreshToken() : string;
}

class CredentialsService implements CredentialsServiceI {
    getAccessToken(): string {
        return "";
    }

    getRefreshToken(): string {
        return "";
    }

    async storeAccessToken(accessToken: string): Promise<void> {
        await AsyncStorage.setItem('accessToken', accessToken);
    }

    async storeRefreshToken(refreshToken: string): Promise<void> {
        await AsyncStorage.setItem('refreshToken', refreshToken);
    }

    async storeBothToken(accessToken: string, refreshToken: string): Promise<void> {
        await this.storeAccessToken(accessToken);
        await this.storeRefreshToken(refreshToken);
    }
}

export default CredentialsService;
