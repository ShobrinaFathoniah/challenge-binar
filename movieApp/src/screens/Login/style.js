import { StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { GREEN_700, PURPLE_100, PURPLE_400, PURPLE_500 } from '../../utils/colors'

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: PURPLE_100
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: widthPercentageToDP(50)
    },
    input: {
        width: moderateScale(272),
        height: moderateScale(46),
        marginBottom: moderateScale(12),
        borderWidth: moderateScale(4),
        padding: moderateScale(10),
        borderColor: PURPLE_500,
        color: PURPLE_400,
        borderRadius: moderateScale(5)
    },
    containerInput: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        padding: moderateScale(10),
        borderRadius: moderateScale(3),
        alignSelf: 'center',
        backgroundColor: PURPLE_500,
        margin: moderateScale(10)
    },
    buttonText: {
        alignSelf: 'center',
        color: PURPLE_100,
    },
    allButton: {
        flexDirection: 'row',
        alignSelf: 'center',
    }
})

export default styles