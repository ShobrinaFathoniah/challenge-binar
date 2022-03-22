import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { moderateScale } from 'react-native-size-matters'
import { PURPLE_100, PURPLE_200, PURPLE_500 } from '../../../utils/colors'

const ButtonCircle = ({style, nameIcon}) => {
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style

  return (
    <TouchableOpacity style={[styles.circle, { ...passedStyles }]}>
      <FontAwesome style={{ alignSelf: 'center' }} name={nameIcon} color={PURPLE_100} size={15} />
    </TouchableOpacity>
  )
}

export default ButtonCircle

const styles = StyleSheet.create({
  circle: {
    borderRadius: moderateScale(100),
    alignContent: 'center',
    justifyContent: 'center',
    height: moderateScale(35),
    width: moderateScale(35),
    backgroundColor: PURPLE_500
  }
})