import { AuthSession } from 'expo';
import * as Crypto from 'expo-crypto';
import * as Random from 'expo-random';

function URLEncode(str) {
    return str.replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

async function sha256(buffer) {
    return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, buffer, { encoding: Crypto.CryptoEncoding.BASE64 });
}

const randomBytes = await Random.getRandomBytesAsync(32);
let verifier = URLEncode(btoa(randomBytes.toString()));
let challenge = URLEncode(await sha256(verifier));

const redirectUrl = AuthSession.getRedirectUrl();
let authUrl = `${auth0Domain}/authorize?` + this.toQueryString({
    audience: `${auth0Audience}`,
    client_id: `${auth0ClientID}`,
    connection: 'facebook',
    scope: 'openid profile email offline_access',
    redirect_uri: redirectUrl,
    response_type: 'code',
    code_challenge: challenge,
    code_challenge_method: "S256",
    nonce: 'test',
});

const result = await AuthSession.startAsync({
    authUrl: authUrl
});

console.log(JSON.stringify(result));