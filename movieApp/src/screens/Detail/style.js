import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { MAIN_COLOR } from '../../utils/colors'

const style = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: MAIN_COLOR,
    },
    backdrop: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(50),
        resizeMode: 'cover',
        backgroundColor: MAIN_COLOR
    }
})

export default style