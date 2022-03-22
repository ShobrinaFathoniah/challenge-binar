import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { PURPLE_100, PURPLE_500 } from '../../../utils/colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LibreBaskerville } from '../../Fonts'

const DetailCard = ({ urlImage, title, releaseDate, voting, tagLine, status, runtime }) => {
    return (
        <View style={styles.card}>
            <View style={styles.contents}>
                <View style={styles.containerPoster}>
                    <Image style={styles.poster} source={{ uri: `${urlImage}` }} />
                </View>
                <View style={styles.containerContent}>
                    <LibreBaskerville style={styles.title}>{title}</LibreBaskerville>
                    <LibreBaskerville>{releaseDate}</LibreBaskerville>
                    <LibreBaskerville>{voting}</LibreBaskerville>
                    <LibreBaskerville>{tagLine}</LibreBaskerville>
                    <LibreBaskerville>{status}</LibreBaskerville>
                    <LibreBaskerville>{runtime}</LibreBaskerville>
                </View>
            </View>
        </View>
    )
}

export default DetailCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: widthPercentageToDP(90),
        height: moderateScale(180),
        backgroundColor: PURPLE_500,
        borderRadius: moderateScale(10),
        alignSelf: 'center',

    },
    contents: {
        flexDirection: 'row'
    },
    containerPoster: {
        margin: moderateScale(5)
    },
    poster: {
        // backgroundColor: PURPLE_500,
        height: heightPercentageToDP(23),
        width: widthPercentageToDP(30),
        resizeMode: 'contain',
        borderRadius: moderateScale(10),
    },
    containerContent: {
        flex: 1,
        alignSelf: 'center',
        margin: moderateScale(5)
    },
    title: {
        fontSize: moderateScale(18),
    }
})