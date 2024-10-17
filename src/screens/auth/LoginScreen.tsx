/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import { FONTS } from '../../constants/Fonts';
import { normalizeModerately, screenHeight, screenWidth } from '../../utils/Scaling';
import LoginImageLight from '../../assets/images/login_animation_light.png';
import LoginImageDark from '../../assets/images/login_dark_animation.png';
import GoogleIcon from '../../assets/images/google.png';
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableText from '../../components/auth/TouchableText';
import BottomText from '../../components/auth/BottomText';

const LoginScreen = () => {
  const theme = useColorScheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together we Groww
        </CustomText>
        <CustomText variant="h7" style={styles.subText} fontFamily={FONTS.Bold}>
          Invest • Pay • Loans
        </CustomText>

        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={theme === 'dark' ? LoginImageDark : LoginImageLight}
          />
        </View>

        <SocialLoginButton
          icon={<Image source={GoogleIcon} style={styles.gimg} />}
          text="Continue with Google"
          onPress={() => console.log('Google pressed')}
        />
        <SocialLoginButton
          icon={<Icon name="logo-apple" size={18} color={'black'} />}
          text="Continue with Apple"
          onPress={() => console.log('Apple pressed')}
        />

        <TouchableText
          firstText="Use other email ID"
          onPress={() => { }}
          style={{ marginVertical: 30, marginTop: 20 }}
        />
        <BottomText />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  gimg: {
    height: 20,
    width: 20,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    marginVertical: normalizeModerately(25),
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderColor: 'white',
  },
});

export default LoginScreen;
