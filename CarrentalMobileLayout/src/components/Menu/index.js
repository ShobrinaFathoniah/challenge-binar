import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Kotak } from '../../assets';
import React from 'react';

const Menu = ({ icon, name }) => {
  return (
    <View style={styles.menuSet}>
      <ImageBackground source={Kotak} style={styles.menu}>
        <Image source={icon} style={styles.icon} />
      </ImageBackground>
      <Text style={styles.menuName}>{name}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  menuName: {
    fontSize: 13,
  },
  menuSet: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
