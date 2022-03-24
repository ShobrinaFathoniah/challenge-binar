import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { PRIMARY_DARK, PURPLE_200_SDW, SECONDARY_DARK } from '../../../utils/colors'
import { Rancho } from '../../Fonts'

const RecommendedCard = ({image, text}) => {
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

export default RecommendedCard

const styles = StyleSheet.create({
    card: {
        height: heightPercentageToDP(25),
        width: widthPercentageToDP(80),
        marginRight: moderateScale(10)
    },
    image: {
        height: heightPercentageToDP(25),
        width: widthPercentageToDP(80),
        borderRadius: moderateScale(10),
        backgroundColor: SECONDARY_DARK,
        alignSelf: 'center'
    },
    text: {
        fontSize: moderateScale(18),
        marginTop: moderateScale(-30),
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: moderateScale(3),
        color: PRIMARY_DARK,
        backgroundColor: PURPLE_200_SDW,
        borderRadius: moderateScale(4)
    }
})