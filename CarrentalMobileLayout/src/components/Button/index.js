import { Text, TouchableOpacity } from 'react-native';
import React from 'react'

const Button = ({ name, buttonColor, textColor }) => {

    return (
        <TouchableOpacity style={{
            marginTop: 16,
            backgroundColor: buttonColor,
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 35,
            borderRadius: 2,
            paddingVertical: 8,
            paddingHorizontal: 12
        }}>
            <Text style={{
                color: textColor,
                fontSize: 14,
            }}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Button