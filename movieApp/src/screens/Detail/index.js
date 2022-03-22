import { View, StatusBar, ImageBackground, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from './style'
import axios from 'axios'
import { ButtonCircle, DetailCard, LibreBaskerville, MediumCard } from '../../components'
import { MAIN_COLOR } from '../../utils/colors'
import { BASE_URL } from '@env'

const Detail = ({ route }) => {
  const { params } = route.params;
  const idMovie = params.idMovie;

  const [detailMovie, setDetailMovie] = useState({})

  const getDetailMovie = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movies/${idMovie}`)
      console.log(idMovie);
      console.log(res);
      setDetailMovie(res.data)
    } catch (error) {
      console.log(error);
      console.log(idMovie);
    }
  }

  useEffect(() => {
    getDetailMovie()
    getGenres()
  }, [])

  const getGenres = () => {
    const genre = detailMovie.genres
    const allGenres = []
    for (let index = 0; index < genre.length; index++) {
      allGenres.push(genre[index]);
    }
    return allGenres
  }

  return (
    <ScrollView style={style.mainPage}>
      <StatusBar barStyle="dark-content" backgroundColor={MAIN_COLOR} />

      {/* Header */}
      <View>
        <ImageBackground style={style.backdrop} source={{ uri: detailMovie.backdrop_path }} >
          <View style={style.allButtons}>
            <View>
              <ButtonCircle nameIcon="arrow-left" />
            </View>
            <View style={style.miniButtons2}>
              <ButtonCircle nameIcon="heart-o" />
              <ButtonCircle nameIcon="share-alt" />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Konten */}
      <View style={style.detailCard} >
        <DetailCard urlImage={detailMovie.poster_path} title={detailMovie.title} releaseDate={detailMovie.release_date} voting={detailMovie.vote_average} tagLine={detailMovie.tagline} status={detailMovie.status} runtime={detailMovie.runtime} />
      </View>
      <View>
        {/* Genres */}
        <View>
          <LibreBaskerville>Genres</LibreBaskerville>
          <LibreBaskerville>{getGenres()}</LibreBaskerville>
        </View>
      </View>
    </ScrollView>
  )
}

export default Detail