import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { MAIN_COLOR, PRIMARY_DARK, YELLOW_200 } from '../../utils/colors'

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: PRIMARY_DARK
    },
    appName: {
        fontSize: moderateScale(25),
        color: MAIN_COLOR,
        marginStart:moderateScale(15)
    },
    image: {
        width: widthPercentageToDP(70),
        height: heightPercentageToDP(30),
        resizeMode: 'contain',
        alignSelf: 'center',
        margin: moderateScale(10)
    },
    input: {
        width: moderateScale(270),
        height: moderateScale(46),
        marginBottom: moderateScale(12),
        borderBottomWidth: moderateScale(1),
        padding: moderateScale(10),
        borderColor: MAIN_COLOR,
        borderRadius: moderateScale(5),
        color: MAIN_COLOR
    },
    containerInput: {
        alignSelf: 'center',
    },
    button: {
        padding: moderateScale(10),
        borderRadius: moderateScale(3),
        alignSelf: 'center',
        backgroundColor: MAIN_COLOR,
        margin: moderateScale(10),
        width: moderateScale(260),
    },
    buttonText: {
        alignSelf: 'center',
        color: PRIMARY_DARK,
    },
    texts: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    text: {
        color: MAIN_COLOR,
        fontSize: moderateScale(15),
        marginTop:moderateScale(10)
    },
    textRegis: {
        color: YELLOW_200
    },
    star:{
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: moderateScale(5)
    },
    login: {
        fontSize: moderateScale(40),
        color: MAIN_COLOR,
        alignSelf: 'center',
        margin: moderateScale(10),
        letterSpacing: moderateScale(3),
        marginTop: moderateScale(-20)
    },
})

export default styles