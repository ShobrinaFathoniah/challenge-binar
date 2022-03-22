import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import style from '../../../screens/Home/style'
import { BLACK, BROWN_700, PURPLE_500 } from '../../../utils/colors'
import { moderateScale } from 'react-native-size-matters'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LibreBaskerville } from '../../Fonts'
import moment from 'moment'

const MediumCard = ({ image, title, releaseDate, rating = 0, genre, id }) => {

    const release_date = moment(releaseDate).format('DD MMMM YYYY')
    const rate = rating*10

    return (
        <View style={style.page}>
            <View style={{ flexDirection: 'row', marginBottom: moderateScale(10) }}>
                <View style={{}}>
                    <Image style={styles.image} source={{ uri: `${image}` }} />
                </View>
                <View style={{ flex: 2, marginStart: moderateScale(10), }}>
                    <LibreBaskerville style={styles.textTitle}>{title}</LibreBaskerville>
                    <LibreBaskerville style={styles.rating}>{rating}</LibreBaskerville>
                    <LibreBaskerville style={styles.releaseDate}>{release_date}</LibreBaskerville>
                </View>
            </View>


        </View>
    )
}

export default MediumCard

const styles = StyleSheet.create({
    page: {
        flex: 1,

    },
    image: {
        backgroundColor: PURPLE_500,
        height: heightPercentageToDP(30),
        width: widthPercentageToDP(40),
        borderRadius: moderateScale(5)
    },
    textTitle: {
        fontSize: moderateScale(15),
        color: BROWN_700,
        marginBottom: moderateScale(10)
    },
    rating: {
        fontSize: moderateScale(13),
        color: BLACK,
        marginBottom: moderateScale(10)
    },
    genre: {
        fontSize: moderateScale(13),
        color: BLACK,
        marginBottom: moderateScale(10)
    },
    releaseDate: {
        fontSize: moderateScale(13),
        color: BLACK,
        marginBottom: moderateScale(10)
    }
})