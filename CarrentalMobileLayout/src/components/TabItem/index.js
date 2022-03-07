import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ABU, BIRU } from '../../utils/constant'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <Feather name="home" color={BIRU} size={24} /> : <Feather name="home" color={ABU} size={24} />
        if (label === "DaftarMobil") return isFocused ? <Feather name="list" color={BIRU} size={24} /> : <Feather name="list" color={ABU} size={24} />
        if (label === "Akun") return isFocused ? <Feather name="user" color={BIRU} size={24} /> : <Feather name="user" color={ABU} size={24} />

        return <Feather name="home" color={ABU} size={24} />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        fontSize: 10,
        color: isFocused ? BIRU : ABU,
        margin: 5
    })
})