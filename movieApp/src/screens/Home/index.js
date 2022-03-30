import {
  View,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Alert,
  BackHandler,
} from 'react-native';
import {PRIMARY_DARK} from '../../utils/colors';
import {
  Amita,
  LibreBaskerville,
  MediumCard,
  LoadingBar,
  RecommendedCard,
  NoConnection,
} from '../../components';
import {BASE_URL} from '@env';
import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {setLatest, setRecommended} from './redux/action';

const Home = ({navigation}) => {
  // const [listRecommended, setListRecommended] = useState([]);
  // const [listLatest, setListLatest] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [connection, setConnection] = useState(true);

  //dispatch
  const dispatch = useDispatch();

  const {listRecommended, listLatest} = useSelector(state => state.home);

  useEffect(() => {
    getMovies();
    exit();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getMovies();
  };

  const internetChecker = () => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      setConnection(state.isConnected);
    });
  };

  // tombol exit
  const exit = () => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Do you want to exit the application?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  };

  const getMovies = async () => {
    setIsLoading(true);
    internetChecker();
    try {
      const results = await axios.get(`${BASE_URL}/movies`);
      console.log(results);

      dispatch(setRecommended(results.data.results));
      dispatch(setLatest(results.data.results));

      setIsLoading(false);
      setRefreshing(false);
    } catch (error) {
      setIsLoading(false);
      setRefreshing(false);
      console.log(error);
    }
  };

  const recommendedMovie = ({item}) => {
    const idMovie = item.id;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            params: {idMovie},
          })
        }>
        <RecommendedCard image={item.backdrop_path} text={item.title} />
      </TouchableOpacity>
    );
  };

  const latestMovie = ({item}) => {
    const idMovie = item.id;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            params: {idMovie},
          })
        }>
        <MediumCard
          image={item.poster_path}
          title={item.title}
          rating={item.vote_average}
          releaseDate={item.release_date}
          language={item.original_language}
          adult={item.adult}
        />
      </TouchableOpacity>
    );
  };

  //recommended
  const recommended = listRecommended
    .filter(function (item) {
      return item.vote_average >= 5;
    })
    .sort(function (a, b) {
      return b.vote_average - a.vote_average;
    });
  // console.log(recommended);

  //latestUpdated
  const latest = listLatest.sort(function (a, b) {
    return new Date(b.release_date) - new Date(a.release_date);
  });
  // console.log(latest);

  const tampilan = () => {
    return (
      <View>
        {/* Recommended Movie */}
        <View style={{flexDirection: 'column'}}>
          <LibreBaskerville style={style.subTitle}>
            Recommended
          </LibreBaskerville>
          <View style={style.cardHorizontal}>
            <FlatList
              data={recommended}
              numColumns={1}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_item, index) => index}
              ListEmptyComponent={
                <LibreBaskerville>No Data Found</LibreBaskerville>
              }
              renderItem={recommendedMovie}
            />
          </View>
          {LoadingBar(isLoading)}
        </View>

        {/* Latest Movie */}
        <View>
          <LibreBaskerville style={style.subTitle}>
            Latest Updated
          </LibreBaskerville>
          <View style={style.cardVertical}>
            <FlatList
              data={latest}
              keyExtractor={(_item, index) => index}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              ListEmptyComponent={
                <LibreBaskerville>No Data Found</LibreBaskerville>
              }
              renderItem={latestMovie}
            />
          </View>
          {LoadingBar(isLoading)}
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={style.mainPage}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY_DARK} />

      {/* Judul Apps */}
      <Amita style={style.appName}>Livies</Amita>

      {connection ? tampilan() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Home;
