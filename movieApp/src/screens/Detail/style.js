import { StyleSheet, Dimensions } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { MAIN_COLOR, PURPLE_100 } from '../../utils/colors'


const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: MAIN_COLOR,
    },
    backdrop: {
        width: moderateScale(windowWidth),
        height: heightPercentageToDP(30),
        resizeMode: 'cover',
        backgroundColor: PURPLE_100,
    },
    allButtons: {
        flexDirection: 'row',
        margin: moderateScale(10),
    },
    miniButtons2: {
        flexDirection: 'row',
        marginStart: moderateScale(250)
    },
    detailCard: {
        marginTop: moderateScale(-120)
    }
})

export default style