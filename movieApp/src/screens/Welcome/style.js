import { StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { PRIMARY_DARK, PRIMARY_LIGHT, PURPLE_200, SECONDARY_DARK } from '../../utils/colors'

const style = StyleSheet.create({
    page: {
        flex: 1,
    },
    welcomePic: {
        height: moderateScale(200),
        width: widthPercentageToDP(100),
        resizeMode: 'contain',
        marginTop: moderateScale(-90),
        alignSelf: 'center'
    },
    containerText: {
        alignSelf: 'center',
        margin: moderateScale(10),
        marginTop: moderateScale(70)
    },
    text: {
        fontSize: moderateScale(60),
        color: PURPLE_200,
        alignSelf: 'center',

    },
    textWelcome: {
        letterSpacing: moderateScale(5)
    },
    textTo: {
        fontSize: moderateScale(40),
        marginTop: moderateScale(-10),
        letterSpacing: moderateScale(2)
    },
    textLivies: {
        fontSize: moderateScale(80),
        marginTop: moderateScale(-35),
        letterSpacing: moderateScale(2)
    },
    color1: {
        backgroundColor: PRIMARY_DARK,
        flex:1
    },
    color2: {
        backgroundColor: PURPLE_200,
        flex:1
    },
    textEnjoy:{
        color: PRIMARY_DARK,
        fontSize: moderateScale(35),
        marginTop: moderateScale(25)
    },
    textRelax:{
        color: PRIMARY_LIGHT,
        fontSize: moderateScale(20),
    },
    button:{
        padding: moderateScale(15),
        backgroundColor: SECONDARY_DARK,
        width: moderateScale(155),
        alignSelf: 'center',
        borderRadius: moderateScale(50),
        margin: moderateScale(5),
        flexDirection: 'row',
        marginTop: moderateScale(25)
    },
    arrow: {
        marginStart: moderateScale(10),
        alignSelf: 'center',
    },
    textButton:{
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: moderateScale(20),
        color: PURPLE_200,
    },
    arrowLogin: {
        marginStart: moderateScale(34)
    }
})

export default style