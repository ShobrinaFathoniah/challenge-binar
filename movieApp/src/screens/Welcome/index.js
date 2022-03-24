import { View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import { WelcomePic } from '../../assets'
import { Amita, ButtonCircle, LibreBaskerville, Rancho } from '../../components'
import { PRIMARY_DARK } from '../../utils/colors'

const Welcome = ({ navigation }) => {
  return (
    <View style={style.page}>
      <StatusBar barStyle='light-content' backgroundColor={PRIMARY_DARK} />
      <View style={style.color1}>
        <View style={style.containerText}>
          <Rancho style={[style.text, style.textWelcome]}>Welcome</Rancho>
          <Rancho style={[style.text, style.textTo]}>To</Rancho>
          <Amita style={[style.text, style.textLivies]}>Livies</Amita>
        </View>
      </View>
      <View style={style.color2}>
        <Image source={WelcomePic} style={style.welcomePic} />
        <Rancho style={[style.text, style.textEnjoy]}>Enjoy Your Life With Movie</Rancho>
        <Rancho style={[style.text, style.textRelax]}>Relax and Find your Favorite Movie</Rancho>

        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Registrasi')}>
            <LibreBaskerville style={style.textButton}>Register</LibreBaskerville>
            <View>
              <ButtonCircle style={style.arrow} onPress={() => navigation.navigate('Registrasi')} nameIcon="arrow-right" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[style.button, style.buttonLogin]} onPress={() => navigation.navigate('Login')}>
            <LibreBaskerville style={style.textButton}>Login</LibreBaskerville>
            <View>
              <ButtonCircle style={[style.arrow, style.arrowLogin]} onPress={() => navigation.navigate('Login')} nameIcon="arrow-right" />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Welcome