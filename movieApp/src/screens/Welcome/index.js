import { View, Image } from 'react-native'
import React from 'react'
import { Logo } from '../../assets'
import style from './style'

const Welcome = () => {
  return (
    <View>
      <Image source={Logo} style={style.logo} />
    </View>
  )
}

export default Welcome