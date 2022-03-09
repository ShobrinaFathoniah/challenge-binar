import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelveticaFont = ({type="Regular", children, style}) => {

    const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style

    const styles = StyleSheet.create({
        font: {
            fontFamily: `Helvetica-${type}`
        }
    })

  return <Text style={[styles.font, , { ...passedStyles }]} >{children}</Text>
}

export default HelveticaFont