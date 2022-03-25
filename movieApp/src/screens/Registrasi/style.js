import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {MAIN_COLOR, PRIMARY_DARK, YELLOW_200} from '../../utils/colors';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: PRIMARY_DARK,
  },
  signUp: {
    fontSize: moderateScale(40),
    color: MAIN_COLOR,
    alignSelf: 'center',
    margin: moderateScale(10),
    letterSpacing: moderateScale(3),
    marginTop: moderateScale(-15),
  },
  appName: {
    fontSize: moderateScale(25),
    color: MAIN_COLOR,
    marginStart: moderateScale(15),
  },
  image: {
    width: widthPercentageToDP(20),
    height: heightPercentageToDP(10),
    resizeMode: 'contain',
    flex: 1,
    marginEnd: moderateScale(5),
  },
  pic: {
    width: widthPercentageToDP(15),
    height: heightPercentageToDP(10),
    resizeMode: 'contain',
  },
  rowInput: {
    flexDirection: 'row',
  },
  text: {
    color: MAIN_COLOR,
    fontSize: moderateScale(14),
  },
  input: {
    flex: 1,
    width: moderateScale(170),
    marginBottom: moderateScale(15),
    borderBottomWidth: moderateScale(1),
    padding: moderateScale(10),
    borderColor: MAIN_COLOR,
    borderRadius: moderateScale(5),
    marginTop: moderateScale(5),
    color: MAIN_COLOR,
  },
  perInput: {
    marginStart: moderateScale(10),
  },
  containerInput: {
    margin: moderateScale(10),
  },
  button: {
    padding: moderateScale(10),
    borderRadius: moderateScale(3),
    alignSelf: 'center',
    backgroundColor: MAIN_COLOR,
    margin: moderateScale(10),
    width: moderateScale(340),
  },
  buttonText: {
    alignSelf: 'center',
    color: PRIMARY_DARK,
  },
  allButton: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  star: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: moderateScale(5),
  },
  texts: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: moderateScale(30),
  },
  text: {
    color: MAIN_COLOR,
    fontSize: moderateScale(15),
    marginTop: moderateScale(10),
  },
  textRegis: {
    color: YELLOW_200,
  },
});

export default styles;
