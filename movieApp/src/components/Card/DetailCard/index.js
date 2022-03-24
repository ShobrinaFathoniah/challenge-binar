import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { PRIMARY_DARK, PURPLE_200_SDW } from '../../../utils/colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LibreBaskerville } from '../../Fonts'
import { release_date } from '../../../utils/changeDate'

const DetailCard = ({ urlImage, title, releaseDate, voting, tagLine, status, runtime }) => {
    return (
        <View style={styles.card}>
            <View style={styles.contents}>
                <View style={styles.containerPoster}>
                    <Image style={styles.poster} source={{ uri: `${urlImage}` }} />
                </View>
                <View style={styles.containerContent}>
                    <LibreBaskerville style={[styles.text, {fontSize: moderateScale(18),}]}>{title}</LibreBaskerville>
                    <LibreBaskerville style={[styles.text, {fontSize: moderateScale(13), }]}>{status}</LibreBaskerville>
                    <LibreBaskerville style={[styles.text, {fontSize: moderateScale(13),}]}>{release_date(releaseDate)}</LibreBaskerville>
                    <LibreBaskerville style={[styles.text, {fontSize: moderateScale(13),}]}>{tagLine}</LibreBaskerville>
                    <LibreBaskerville style={[styles.text, {fontSize: moderateScale(13),}]}>{voting}</LibreBaskerville>
                    <LibreBaskerville style={[styles.text, {fontSize: moderateScale(13),}]}>{runtime} minutes</LibreBaskerville>
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
        backgroundColor: PURPLE_200_SDW,
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
    text: {
        color: PRIMARY_DARK,
        marginBottom: moderateScale(5)
    },
    releaseDate: {
        color:PRIMARY_DARK,

    }
    
})