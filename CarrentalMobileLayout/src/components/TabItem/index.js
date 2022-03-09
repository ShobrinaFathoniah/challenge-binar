import { StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import { ABU, BIRU, BIRU_MUDA, PUTIH } from '../../utils/constant'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useIsFocused } from '@react-navigation/native'
import HelveticaFont from '../HelveticaFont'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {

    const FocusAwareStatusBar = props => {
        const isFocused = useIsFocused();

        return isFocused ? <StatusBar {...props} /> : null;
    }

    const Icon = () => {
        if (label === "Home") {
            if (isFocused) {
                return (
                    <View>
                        <FocusAwareStatusBar backgroundColor={BIRU_MUDA} barStyle="dark-content" />
                        <Feather name="home" color={BIRU} size={24} />
                    </View>)

            } else {
                return <Feather name="home" color={ABU} size={24} />
            }
        } else if (label === "DaftarMobil") {
            if (isFocused) {
                return (
                    <View>
                        <FocusAwareStatusBar backgroundColor={PUTIH} barStyle="dark-content" />
                        <Feather name="list" color={BIRU} size={24} />
                    </View>
                )

            } else {
                return <Feather name="list" color={ABU} size={24} />
            }
        } else if (label === "Akun") {
            if (isFocused) {
                return (
                    <View>
                        <FocusAwareStatusBar backgroundColor={PUTIH} barStyle="dark-content" />
                        <Feather name="user" color={BIRU} size={24} />
                    </View>
                )

            } else {
                return <Feather name="user" color={ABU} size={24} />
            }
        } else {
            return <Feather name="home" color={ABU} size={24} />
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <HelveticaFont style={styles.text(isFocused)}>
                {label}
            </HelveticaFont>
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