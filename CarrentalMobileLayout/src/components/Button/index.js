import { TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import HelveticaFont from '../HelveticaFont';

const Button = ({ name, buttonColor, textColor }) => {
    const styles = StyleSheet.create({
        button: {
            marginTop: 16,
            backgroundColor: buttonColor,
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 35,
            borderRadius: 2,
            paddingVertical: 8,
            paddingHorizontal: 12
        },
        text: {
            color: textColor,
            fontSize: 14,
        }
    })

    return (
        <TouchableOpacity style={styles.button}>
            <HelveticaFont style={styles.text}>{name}</HelveticaFont>
        </TouchableOpacity>
    )
}

export default Button