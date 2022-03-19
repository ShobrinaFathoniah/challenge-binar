import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { BLACK, WHITE } from '../../utils/colors'

const style = StyleSheet.create({
    mainPage: {
        flex:1,
        backgroundColor: WHITE
    },
    appName: {
        color: BLACK,
        fontSize: moderateScale(30),
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    subTitle: {
        color: BLACK,
        fontSize: moderateScale(15),
        margin: moderateScale(10)
    },
    cardHorizontal:{
        marginBottom: moderateScale(10),
        marginStart: moderateScale(20),
    },
    cardVertical:{
        marginBottom: moderateScale(10),
        marginEnd: moderateScale(10),
        marginStart: moderateScale(20)
    }
})

export default style

