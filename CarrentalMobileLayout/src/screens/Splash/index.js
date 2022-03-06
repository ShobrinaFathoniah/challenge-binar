import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import SplashImage from '../../assets/image/Splash.png';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return <ImageBackground source={SplashImage} style={styles.background} />;
};

export default Splash;

const windowsWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: windowsWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
