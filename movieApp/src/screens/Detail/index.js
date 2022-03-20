import { View, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from './style'
import axios from 'axios'
import { MiniCard } from '../../components'
import { MAIN_COLOR } from '../../utils/colors'

const Detail = ({ route }) => {
  const { params } = route.params;
  const idMovie = params.idMovie;

  const [detailMovie, setDetailMovie] = useState({})

  const getDetailMovie = async () => {
    try {
      const res = await axios.get(`http://code.aldipee.com/api/v1/movies/${idMovie}`)
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
  }, [])

  return (
    <View style={style.mainPage}>
      <StatusBar barStyle="dark-content" backgroundColor={MAIN_COLOR} />

      {/* Konten */}
      <MiniCard image={`${detailMovie.poster_path}`} />
    </View>
  )
}

export default Detail