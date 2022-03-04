import { StyleSheet, Text, View , ImageBackground, Dimensions, Image } from 'react-native'
import React from 'react'
import { Banner, Background, Profile} from '../../assets'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={Background} style={styles.header}>
        <Text>Hi, Nama</Text>
        <Text>Your Location</Text>
        <Image source={Profile} style={styles.profile} />
        <Image source={Banner} style={styles.banner} />
      </ImageBackground>
      
    </View>
  )
}

export default Home

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    width: windowsWidth,
    height: windowsHeight * 0.275
  },
  profile:{
    marginLeft: windowsWidth * 0.8
  },
  banner:{
    width: 328,
    height: 140,
    marginTop: windowsHeight * 0.17,
    marginLeft: windowsWidth * 0.08
  },
  
})