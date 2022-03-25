import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  PINK_200,
  MAIN_COLOR,
  PURPLE_100,
  PURPLE_500,
  PRIMARY_DARK,
  SECONDARY_DARK,
  SECONDARY_LIGHT,
  PURPLE_400,
} from '../../utils/colors';

const windowWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: PRIMARY_DARK,
  },
  backdrop: {
    width: moderateScale(windowWidth),
    height: heightPercentageToDP(30),
    resizeMode: 'cover',
    backgroundColor: SECONDARY_DARK,
  },
  image: {
    height: heightPercentageToDP(35),
    width: widthPercentageToDP(45),
    resizeMode: 'contain',
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  containerPoster: {
    alignSelf: 'center',
  },
  textTitle: {
    color: MAIN_COLOR,
    fontSize: moderateScale(25),
    margin: moderateScale(10),
    textAlign: 'center',
  },
  rating: {
    alignSelf: 'center',
  },
  containerTextDetail: {
    margin: moderateScale(15),
    alignSelf: 'center',
  },
  textDetail: {
    color: PURPLE_400,
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  tagline: {
    color: SECONDARY_LIGHT,
    fontSize: moderateScale(22),
    textAlign: 'center',
  },
  containerTagline: {
    alignSelf: 'center',
    marginVertical: moderateScale(10),
  },
  allButtons: {
    flexDirection: 'row',
    margin: moderateScale(10),
  },
  miniButtons2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  detailCard: {
    marginTop: moderateScale(-120),
  },
  title: {
    fontSize: moderateScale(18),
    color: MAIN_COLOR,
  },
  containerGenre: {
    marginTop: moderateScale(5),
  },
  listGenre: {
    margin: moderateScale(15),
  },
  genre: {
    margin: moderateScale(5),
    backgroundColor: PINK_200,
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  synopshisContainer: {
    marginHorizontal: moderateScale(15),
  },
  synopshis: {
    margin: moderateScale(10),
    fontSize: moderateScale(20),
    color: PURPLE_100,
    textAlign: 'justify',
  },
  listArtist: {
    margin: moderateScale(15),
  },
  artist: {
    margin: moderateScale(5),
  },
  footer: {
    margin: moderateScale(15),
    alignSelf: 'center',
  },
  loadMoreBtn: {
    padding: moderateScale(13),
    backgroundColor: PURPLE_500,
    borderRadius: moderateScale(5),
  },
  btnText: {
    color: PRIMARY_DARK,
    fontSize: moderateScale(15),
  },
  text: {
    color: MAIN_COLOR,
  },
});

export default style;
