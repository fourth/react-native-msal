import type {B2CConfiguration} from './b2cClient';

export const b2cConfig: B2CConfiguration = {
    auth: {
        clientId: '5a77ee9c-e03f-4a82-8fd0-8aefbce95517',
        authorityBase: 'https://login-qai.fourth.com/6fb5b761-45b0-4112-b752-94febe13350a',
        authorizationUserAgent: "WEBVIEW",
        redirectUri: "msauth://com.fourth.marketplace.qa/ga0RGNYHvNM5d0SLGQfpQWAPGJ8%3D",
        policies: {
            signInSignUp: 'B2C_1A_EMEA_LOGIN',
            // passwordReset: 'B2C_1_PasswordReset',
        },
        // redirectUri: Platform.select({ default: undefined }),
    },
    // web only:
    cache: {cacheLocation: 'localStorage'},
};

export const b2cScopes = ['https://fourthcustomers.onmicrosoft.com/5a77ee9c-e03f-4a82-8fd0-8aefbce95517/Token.Issue'];