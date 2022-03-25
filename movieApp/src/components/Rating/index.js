import { StyleSheet, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BROWN_700, YELLOW_200 } from '../../utils/colors'
import { moderateScale } from 'react-native-size-matters'

const Rating = ({ rating }) => {
    const ratingBagiDua = rating / 2

    if (ratingBagiDua === 5) {
        return (
            <View style={styles.container}>
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
            </View>
        )
    } else if (ratingBagiDua < 5 && ratingBagiDua >= 4) {
        return (
            <View style={styles.container}>
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
            </View>
        )
    } else if (ratingBagiDua < 4 && ratingBagiDua >= 3) {
        return (
            <View style={styles.container}>
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
            </View>
        )
    } else if (ratingBagiDua < 3 && ratingBagiDua >= 2) {
        return (
            <View style={styles.container}>
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
            </View>
        )
    } else if (ratingBagiDua < 2 && ratingBagiDua >= 1) {
        return (
            <View style={styles.container}>
                <MaterialIcons name='star' size={24} color={YELLOW_200} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
                <MaterialIcons name='star' size={24} color={BROWN_700} />
            </View>
        )
    }
}

export default Rating

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: moderateScale(10)
    }
})