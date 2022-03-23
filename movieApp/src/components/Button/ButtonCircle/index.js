import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { moderateScale } from 'react-native-size-matters'
import { BLACK, PURPLE_300 } from '../../../utils/colors'

const ButtonCircle = ({style, nameIcon, onPress}) => {
  const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style

  return (
    <TouchableOpacity onPress={onPress} style={[styles.circle, { ...passedStyles }]}>
      <FontAwesome style={{ alignSelf: 'center' }} name={nameIcon} color={BLACK} size={18} />
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
    backgroundColor: PURPLE_300
  }
})