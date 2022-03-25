import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { MAIN_COLOR, PRIMARY_DARK } from '../../utils/colors'

const style = StyleSheet.create({
    mainPage: {
        flex:1,
        backgroundColor: PRIMARY_DARK,
    },
    appName: {
        color: MAIN_COLOR,
        fontSize: moderateScale(30),
        alignSelf: 'center',
        marginTop: moderateScale(10)
    },
    subTitle: {
        color: MAIN_COLOR,
        fontSize: moderateScale(18),
        margin: moderateScale(10)
    },
    cardHorizontal:{
        marginBottom: moderateScale(10),
        marginStart: moderateScale(20),
    },
    cardVertical:{
        marginBottom: moderateScale(10),
        marginEnd: moderateScale(10),
        marginStart: moderateScale(20),
    }
})

export default style

