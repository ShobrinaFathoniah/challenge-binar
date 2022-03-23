import { StyleSheet, Dimensions } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import { PINK_200, MAIN_COLOR, PURPLE_200, PURPLE_300, BLACK, BROWN_700, PURPLE_100, PURPLE_400, PURPLE_500, BROWN_300 } from '../../utils/colors'


const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
    mainPage: {
        flex: 1,
        backgroundColor: PURPLE_100,
    },
    backdrop: {
        width: moderateScale(windowWidth),
        height: heightPercentageToDP(30),
        resizeMode: 'cover',
        backgroundColor: PURPLE_200,
    },
    allButtons: {
        flexDirection: 'row',
        margin: moderateScale(10),
    },
    miniButtons2: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    detailCard: {
        marginTop: moderateScale(-120)
    },
    title: {
        fontSize: moderateScale(18),
        color: BROWN_700
    },
    container: {
        marginTop: moderateScale(10)
    },
    listGenre: {
        margin: moderateScale(15)
    },
    genre: {
        margin: moderateScale(5),
        backgroundColor: PINK_200,
        padding: moderateScale(10),
        borderRadius: moderateScale(10),
        color: BROWN_700
    },
    synopshisContainer: {
        marginHorizontal: moderateScale(15)
    },
    synopshis: {
        margin: moderateScale(10),
        fontSize: moderateScale(18),
        color: BROWN_700,
        textAlign: 'justify'
    },
    listArtist: {
        margin: moderateScale(15)
    },
    artist: {
        margin: moderateScale(5),
    },
    footer: {
        margin: moderateScale(15),
        alignSelf: 'center'
    },
    loadMoreBtn: {
        padding: moderateScale(13),
        backgroundColor: PURPLE_500,
        borderRadius: moderateScale(5),

    },
    btnText: {
        color: PURPLE_100,
        fontSize: moderateScale(15)
    },
    text: {
        color: BLACK
    }
})

export default style