import { StyleSheet, Image, View } from 'react-native'
import React, { useState } from 'react'
import style from '../../../screens/Home/style'
import { BROWN_300, GREEN_300, MAIN_COLOR, PRIMARY_DARK, PURPLE_100, SECONDARY_DARK, SECONDARY_LIGHT, YELLOW_200 } from '../../../utils/colors'
import { moderateScale } from 'react-native-size-matters'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { LibreBaskerville } from '../../Fonts'
import { release_year } from '../../../utils/changeDate'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MediumCard = ({ image, title, releaseDate, rating = 0, language, adult }) => {
    const [isAdult, setAdult] = useState(adult)

    const movieType = (adult) => {

        if (adult) {
            return (
                <View style={[styles.bubble, { backgroundColor: 'red', width: moderateScale(55), }]}>
                    <LibreBaskerville style={{textAlign: 'center', color: PRIMARY_DARK}}>18+</LibreBaskerville>
                </View>
            )
        } else {
            return (
                <View style={styles.bubble}>
                    <LibreBaskerville style={{textAlign: 'center', color: PRIMARY_DARK}}>All Age</LibreBaskerville>
                </View>
            )
        }
    }

    const rate = rating * 10

    return (
        <View style={style.page}>
            <View style={{ flexDirection: 'row', marginBottom: moderateScale(10), }}>
                <View style={{}}>
                    <Image style={styles.image} source={{ uri: `${image}` }} />
                </View>
                <View style={{ flex: 2, marginStart: moderateScale(10), marginTop: moderateScale(25) }}>
                    <LibreBaskerville style={styles.textTitle}>{title}</LibreBaskerville>
                    <View style={{ marginTop: moderateScale(15) }}>
                        <View style={{ flexDirection: 'row', }}>
                            <LibreBaskerville style={[styles.releaseDate, styles.text]}>{release_year(releaseDate)}</LibreBaskerville>
                            <View style={[styles.text, styles.rating]}>
                                <MaterialIcons name="star" size={18} color={YELLOW_200}/>
                                <LibreBaskerville style={{marginLeft: moderateScale(3), color: PRIMARY_DARK}}>{rating}</LibreBaskerville>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {movieType(isAdult)}
                            <LibreBaskerville style={[styles.language, styles.text]}>{language}</LibreBaskerville>
                        </View>
                    </View>

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
        backgroundColor: MAIN_COLOR,
        height: heightPercentageToDP(30),
        width: widthPercentageToDP(40),
        borderRadius: moderateScale(5)
    },
    textTitle: {
        fontSize: moderateScale(15),
        color: PURPLE_100,
        marginBottom: moderateScale(10)
    },
    text: {
        fontSize: moderateScale(13),
        color: PRIMARY_DARK,
        marginBottom: moderateScale(10),
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
        backgroundColor: BROWN_300,
    },
    rating: {
        fontSize: moderateScale(20),
        width: moderateScale(60),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    releaseDate: {
        width: moderateScale(55),
        marginEnd: moderateScale(10),
        textAlign: 'center'
    },
    bubble: {
        padding: moderateScale(10),
        width: moderateScale(80),
        borderRadius: moderateScale(5),
        backgroundColor: GREEN_300,
        alignSelf: 'center',
    },
    language: {
        width: moderateScale(40),
        marginStart: moderateScale(10),
        textAlign: 'center'
    },
})