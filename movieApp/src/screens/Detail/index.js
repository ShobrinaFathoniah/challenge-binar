import {
  View,
  StatusBar,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Share,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './style';
import axios from 'axios';
import {CommonActions} from '@react-navigation/native';
import {
  ButtonCircle,
  LibreBaskerville,
  LoadingBar,
  MiniCard,
  NoConnection,
  Rancho,
  Rating,
} from '../../components';
import {PINK_200, PRIMARY_DARK} from '../../utils/colors';
import {BASE_URL} from '@env';
import {moderateScale} from 'react-native-size-matters';
import {release_date} from '../../utils/changeDate';
import NetInfo from '@react-native-community/netinfo';

const Detail = ({route, navigation}) => {
  const {params} = route.params;
  const idMovie = params.idMovie;

  const [detailMovie, setDetailMovie] = useState({});
  const [listGenre, setListGenre] = useState([]);
  const [listArtist, setListArtist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [end, setEnd] = useState(6);
  const [lengthCastArtist, setLengthCastArtist] = useState(0);
  const [connection, setConnection] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getDetailMovie();
  };

  const internetChecker = () => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      setConnection(state.isConnected);
    });
  };

  const getDetailMovie = async () => {
    setIsLoading(true);
    internetChecker();

    try {
      const res = await axios.get(`${BASE_URL}/movies/${idMovie}`);

      console.log(idMovie);
      console.log(res);
      console.log(res.data.credits.cast.length);

      setDetailMovie(res.data);
      setListGenre(res.data.genres);
      setListArtist(res.data.credits.cast);
      setLengthCastArtist(res.data.credits.cast.length);

      setIsLoading(false);
      setRefreshing(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
      console.log(idMovie);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  const genres = ({item}) => {
    return (
      <View style={style.genre}>
        <LibreBaskerville style={{color: PRIMARY_DARK}}>
          {item.name}
        </LibreBaskerville>
      </View>
    );
  };

  const artist = ({item}) => {
    return (
      <View style={style.artist}>
        <MiniCard image={item.profile_path} text={item.name} />
      </View>
    );
  };

  const shareData = () => {
    Share.share({
      message: `"${
        detailMovie.tagline
      }"\n\nSaya ingin merekomendasikan Anda film dengan judul '${
        detailMovie.title
      }' film ini dirilis pada ${release_date(
        detailMovie.release_date,
      )}. Untuk selengkapnya Anda dapat melihat pada link berikut ini ${
        detailMovie.homepage
      }.`,
    });
  };

  const goBack = () => navigation.dispatch(CommonActions.goBack());

  const dataArtist = listArtist.slice(0, end);

  const renderFooter = () => {
    const tmp = end;
    if (end < lengthCastArtist) {
      return (
        <View style={style.footer}>
          <TouchableOpacity
            onPress={() => {
              setEnd(tmp + 6);
            }}
            style={style.loadMoreBtn}>
            <LibreBaskerville style={style.btnText}>Load More</LibreBaskerville>
          </TouchableOpacity>
        </View>
      );
    } else if (end > lengthCastArtist || end === lengthCastArtist) {
      return (
        <View style={style.footer}>
          <LibreBaskerville style={style.text}>No More Data</LibreBaskerville>
        </View>
      );
    }
  };

  const tampilan = () => {
    return (
      <View>
        {/* Header */}
        <View>
          <ImageBackground
            blurRadius={2}
            style={style.backdrop}
            source={{uri: detailMovie.backdrop_path}}>
            <View style={style.allButtons}>
              <View>
                <ButtonCircle nameIcon="arrow-left" onPress={goBack} />
              </View>
              <View style={style.miniButtons2}>
                <ButtonCircle
                  style={{marginEnd: moderateScale(5)}}
                  nameIcon="heart-o"
                />
                <ButtonCircle
                  style={{marginEnd: moderateScale(18)}}
                  nameIcon="share-alt"
                  onPress={shareData}
                />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Konten */}
        <View style={style.detailCard}>
          <View style={style.containerPoster}>
            <Image
              source={{uri: detailMovie.poster_path}}
              style={style.image}
            />
            <LibreBaskerville style={style.textTitle}>
              {detailMovie.title}
            </LibreBaskerville>
          </View>

          <View style={style.rating}>
            <Rating rating={detailMovie.vote_average} />
          </View>

          <View style={style.containerTagline}>
            <LibreBaskerville style={style.tagline} type="Italic">
              `{detailMovie.tagline}`
            </LibreBaskerville>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginRight: moderateScale(10),
              alignSelf: 'center',
            }}>
            <View style={style.containerTextDetail}>
              <LibreBaskerville style={style.textDetail}>
                Status
              </LibreBaskerville>
              <LibreBaskerville style={[style.textDetail, {color: PINK_200}]}>
                {detailMovie.status}
              </LibreBaskerville>
            </View>
            <View style={style.containerTextDetail}>
              <LibreBaskerville style={style.textDetail}>
                Release Date
              </LibreBaskerville>
              <LibreBaskerville style={[style.textDetail, {color: PINK_200}]}>
                {release_date(detailMovie.release_date)}
              </LibreBaskerville>
            </View>
            <View style={style.containerTextDetail}>
              <LibreBaskerville style={style.textDetail}>
                Runtime
              </LibreBaskerville>
              <LibreBaskerville
                type="Bold"
                style={[style.textDetail, {color: PINK_200}]}>
                {detailMovie.runtime} minutes
              </LibreBaskerville>
            </View>
          </View>
        </View>

        {LoadingBar(isLoading)}

        <View style={style.containerGenre}>
          {/* Genres */}
          <View style={style.listGenre}>
            <LibreBaskerville style={style.title}>Genres</LibreBaskerville>
            <FlatList
              data={listGenre}
              horizontal={true}
              keyExtractor={(_item, index) => index}
              renderItem={genres}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Synopsis */}
          <View style={style.synopshisContainer}>
            <LibreBaskerville style={style.title}>Synopsis</LibreBaskerville>
            <Rancho style={style.synopshis}>{detailMovie.overview}</Rancho>
          </View>
        </View>

        {/* Actors/Artist */}
        <View>
          <View style={style.listArtist}>
            <LibreBaskerville style={style.title}>
              Actors/Artist
            </LibreBaskerville>
            <View style={{marginTop: moderateScale(10)}}>
              <FlatList
                data={dataArtist}
                horizontal={false}
                numColumns={2}
                keyExtractor={(_item, index) => index}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                renderItem={artist}
                enableEmptySections={true}
                ListFooterComponent={renderFooter}
              />
            </View>
          </View>
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

      {connection ? tampilan() : NoConnection(connection)}

      {/* listheadercomponen-> semuamasukin
      footter */}
    </ScrollView>
  );
};

export default Detail;
