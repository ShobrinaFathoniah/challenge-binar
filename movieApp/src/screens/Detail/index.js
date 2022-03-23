import { View, StatusBar, ImageBackground, ScrollView, Text, Share, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from './style'
import axios from 'axios'
import { CommonActions } from '@react-navigation/native';
import { ButtonCircle, DetailCard, LibreBaskerville, MiniCard, Rancho } from '../../components'
import { MAIN_COLOR, PURPLE_100, PURPLE_500 } from '../../utils/colors'
import { BASE_URL } from '@env'
import { moderateScale } from 'react-native-size-matters'
import * as Progress from 'react-native-progress';
import moment from 'moment';

const Detail = ({ route, navigation }) => {
  const { params } = route.params;
  const idMovie = params.idMovie;

  const [detailMovie, setDetailMovie] = useState({})
  const [listGenre, setListGenre] = useState([])
  const [listArtist, setListArtist] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [end, setEnd] = useState(6);
  const [lengthCastArtist, setLengthCastArtist] = useState(0);

  const release_date = moment(detailMovie.releaseDate).format('DD MMMM YYYY')

  //loading bar
  const loadingBar = (loading) => {
    if (loading) {
      return (
        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <Progress.CircleSnail size={80} indeterminate={true} thickness={5} color={PURPLE_500} />
        </View>
      )
    } else {
      return (null)
    }
  }

  const getDetailMovie = async () => {
    setIsLoading(true)

    try {
      const res = await axios.get(`${BASE_URL}/movies/${idMovie}`)

      console.log(idMovie);
      console.log(res);
      console.log(res.data.credits.cast.length);

      setDetailMovie(res.data)
      setListGenre(res.data.genres)
      setListArtist(res.data.credits.cast)
      setLengthCastArtist(res.data.credits.cast.length)

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

      console.log(error);
      console.log(idMovie);
    }
  }

  useEffect(() => {
    getDetailMovie()
  }, [])

  const genres = (({ item }) => {
    return (
      <View style={style.genre}>
        <LibreBaskerville>{item.name}</LibreBaskerville>
      </View>
    )
  })

  const artist = (({ item }) => {
    return (
      <View style={style.artist}>
        <MiniCard image={item.profile_path} text={item.name} />
      </View>
    )
  })

  const shareData = () => {
    Share.share({
      message:
        `"${detailMovie.tagline}"\n\nSaya ingin merekomendasikan Anda film dengan judul '${detailMovie.title}' film ini dirilis pada ${release_date}. Untuk selengkapnya Anda dapat melihat pada link berikut ini ${detailMovie.homepage}.`,
    });
  };

  const goBack = () => navigation.dispatch(CommonActions.goBack())

  const dataArtist = listArtist.slice(0, end)

  const renderFooter = () => {
    const tmp = end
    if (end < lengthCastArtist) {
      return (
        <View style={style.footer}>
          <TouchableOpacity
            onPress={() => {
              setEnd(tmp + 6)
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

  return (
    <ScrollView style={style.mainPage}>
      <StatusBar barStyle="dark-content" backgroundColor={PURPLE_100} />

      {/* Header */}
      <View>
        <ImageBackground blurRadius={2} style={style.backdrop} source={{ uri: detailMovie.backdrop_path }} >
          <View style={style.allButtons}>
            <View>
              <ButtonCircle nameIcon="arrow-left" onPress={goBack} />
            </View>
            <View style={style.miniButtons2}>
              <ButtonCircle style={{ marginEnd: moderateScale(5) }} nameIcon="heart-o" />
              <ButtonCircle style={{ marginEnd: moderateScale(18) }} nameIcon="share-alt" onPress={shareData} />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Konten */}
      <View style={style.detailCard} >
        <DetailCard urlImage={detailMovie.poster_path} title={detailMovie.title} releaseDate={detailMovie.release_date} voting={detailMovie.vote_average} tagLine={detailMovie.tagline} status={detailMovie.status} runtime={detailMovie.runtime} />
      </View>

      {loadingBar(isLoading)}

      <View style={style.container}>
        {/* Genres */}
        <View style={style.listGenre}>
          <LibreBaskerville style={style.title}>Genres</LibreBaskerville>
          <FlatList data={listGenre}
            horizontal={true}
            keyExtractor={(_item, index) => index}
            renderItem={genres}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Synopshis */}
        <View style={style.synopshisContainer}>
          <LibreBaskerville style={style.title}>Synopshis</LibreBaskerville>
          <Rancho style={style.synopshis}>{detailMovie.overview}</Rancho>
        </View>
      </View>

      {/* Actors/Artist */}
      <View>
        <View style={style.listArtist}>
          <LibreBaskerville style={style.title}>Actors/Artist</LibreBaskerville>
          <View style={{ marginTop: moderateScale(10) }}>
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
    </ScrollView>
  )
}

export default Detail