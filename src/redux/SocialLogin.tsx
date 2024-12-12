import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Alert, Platform } from 'react-native';
import {
    appleAuth,
    appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';

export const signInWithAppleAndroid = () => async () => {
    try {
        const rawNonce = uuid();
        const state = uuid();

        appleAuthAndroid.configure({
            clientId: '',
            redirectUri: 'https://xyz.your.redirect.myapp.com/apple_signin/callback',
            responseType: appleAuthAndroid.ResponseType.ALL,
            scope: appleAuthAndroid.Scope.ALL,
            nonce: rawNonce as unknown as string,
            state: state as unknown as string,
        });

        const response = await appleAuthAndroid.signIn();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

export const signInWithAppleIos = () => async (dispatch: any) => {
    try {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        });
        const credentialState = await appleAuth.getCredentialStateForUser(
            appleAuthRequestResponse.user
        );
        if (credentialState === appleAuth.State.AUTHORIZED) {
            const appleResponse = appleAuthRequestResponse;
            console.log(appleResponse);
        } else {
            throw new Error('There was an error');
        }
    } catch (error) {
        console.error(error);
    }
};

export const signInWithApple = async (dispatch: any) => {
    if (Platform.OS === 'ios') {
        await dispatch(signInWithAppleIos());
    } else {
        await dispatch(signInWithAppleAndroid());
    }
};

export const signInWithGoogle = async () => {
    try {
        console.log('clicked signin with google');
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signOut();
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken);

        Alert.alert('Token');
    } catch (error) {
        console.error(error);
    }
};

export default {
    signInWithGoogle,
};
function uuid() {
    throw new Error('Function not implemented.');
}

