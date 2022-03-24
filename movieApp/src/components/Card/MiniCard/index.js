import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Rancho } from '../../Fonts'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { MAIN_COLOR, SECONDARY_DARK } from '../../../utils/colors'
import { moderateScale } from 'react-native-size-matters'
import { URL_NOT_IMAGE } from '@env'

export default function MiniCard({ image, text }) {
    if (image === "https://image.tmdb.org/t/p/w500null") {
        return (
            <View style={styles.card}>
                <View>
                    <Image style={styles.image} source={{ uri: URL_NOT_IMAGE }} />
                    <View>
                        <Rancho style={styles.text}>{text}</Rancho>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.card}>
                <View>
                    <Image style={styles.image} source={{ uri: image }} />
                    <View>
                        <Rancho style={styles.text}>{text}</Rancho>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: widthPercentageToDP(40),
        marginRight: moderateScale(10)
    },
    image: {
        height: heightPercentageToDP(30),
        width: widthPercentageToDP(40),
        borderRadius: moderateScale(5),
        backgroundColor: SECONDARY_DARK,
    },
    text: {
        fontSize: moderateScale(18),
        marginTop: moderateScale(5),
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: moderateScale(3),
        color: MAIN_COLOR
    }
})