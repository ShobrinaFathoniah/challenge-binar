import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Rancho } from '../../Fonts'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { PURPLE_400 } from '../../../utils/colors'
import { moderateScale } from 'react-native-size-matters'

export default function MiniCard({ image, text }) {
    return (
        <View style={styles.card}>
            <View>
                <Image style={styles.image} source={{ uri: `${image}` }} />
                <View>
                    <Rancho style={styles.text}>{text}</Rancho>
                </View>
            </View>
        </View>
    )
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
        backgroundColor: PURPLE_400,
    },
    text: {
        fontSize: moderateScale(15),
        marginTop: moderateScale(5),
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: moderateScale(3)
    }
})