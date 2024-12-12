import React, { useState } from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import BackButton from '../../components/global/BackButton';
import CenteredLogo from '../../components/global/CenteredLogo';
import { StyleSheet, View } from 'react-native';
import CustomInput from '../../components/input/CustomInput';
import TouchableText from '../../components/auth/TouchableText';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '../../components/global/CustomButton';

const EmailScreen = () => {
    const [loading, setLoading] = useState(false);
    return (
        <CustomSafeAreaView>
            <BackButton />
            <CenteredLogo />
            <View style={styles.inputContainer}>
                <CustomInput
                    label="EMAIL ADDRESS"
                    returnKeyType="done"
                    placeholder="Enter your email address"
                    onSubmitEditing={() => {
                        console.log('HIT OTP API');
                    }}
                />
                <CustomInput
                    label="PASSWORD"
                    returnKeyType="done"
                    placeholder="Enter Password"
                    onSubmitEditing={() => {
                        console.log('HIT OTP API');
                    }}
                />
                <CustomInput
                    label="ENTER OTP SEND TO THIS EMAIL ID"
                    placeholder="Enter OTP"
                    onSubmitEditing={() => {
                        console.log('HIT OTP API');
                    }}
                    keyboardType="number-pad"
                    rightText={
                        <TouchableText
                            onPress={() => { }}
                            firstText="Resend in 25s"
                            style={{ fontSize: RFValue(9), marginTop: 0 }}
                        />
                    }
                />
            </View>

            <CustomButton text="NEXT" loading={loading} disabled={false} onPress={() => setLoading(true)} />
        </CustomSafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 40,
        paddingHorizontal: 3,
    },
});

export default EmailScreen;
