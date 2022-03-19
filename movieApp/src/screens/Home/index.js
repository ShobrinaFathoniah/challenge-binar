import { View, StatusBar, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { MAIN_COLOR } from '../../utils/colors'
import { Amita, MiniCard, LibreBaskerville, DetailCard } from '../../components'
import { BASE_URL, ACCESS_TOKEN, IMAGE_URL } from '@env'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from './style'

const Home = ({ navigation }) => {
    // API masih belum sesuai
    const [listRecommended, setListRecommended] = useState([])
    const [listLatest, setListLatest] = useState([])

    useEffect(() => {
        getRecommendedMovie()
        getLatestMovie()
    }, [])

    const getRecommendedMovie = async () => {
        try {
            const results = await axios.get(`${BASE_URL}/movie/now_playing`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
            console.log(results);
            setListRecommended(results.data.results)

        } catch (error) {
            console.log(error);
        }
    }

    const recommendedMovie = (({ item }) => {
        return (
            <MiniCard image={`${IMAGE_URL}${item.poster_path}`} />
        )
    })

    const getLatestMovie = async () => {
        try {
            const results = await axios.get(`${BASE_URL}/movie/upcoming`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
            console.log(results);
            setListLatest(results.data.results)

        } catch (error) {
            console.log(error);
        }
    }

    const latestMovie = (({ item }) => {
        const idMovie = item.id

        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                params: { idMovie }
            })}>
                <DetailCard image={`${IMAGE_URL}${item.poster_path}`} title={item.title} rating={item.vote_average} releaseDate={item.release_date} genre={item.genre_ids} />
            </TouchableOpacity>
        )
    })

    // const getGenreMovie = async () => {
    //     try {
    //         const res = await axios.get(`${BASE_URL}genre/movie/list`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
    //         console.log(res);
    //         setListLatest(results)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <ScrollView style={style.mainPage}>
            <StatusBar barStyle="dark-content" backgroundColor={MAIN_COLOR} />

            {/* Judul Apps */}
            <Amita style={style.appName}>Livies</Amita>

            {/* Recommended Movie */}
            <View>
                <LibreBaskerville style={style.subTitle}>Recommended</LibreBaskerville>
                <View style={style.cardHorizontal}>
                    <FlatList
                        data={listRecommended}
                        numColumns={1}
                        horizontal={true}
                        keyExtractor={(_item, index) => index}
                        renderItem={recommendedMovie} />

                </View>
            </View>


            {/* Latest Movie */}
            <View>
                <LibreBaskerville style={style.subTitle}>Latest Updated</LibreBaskerville>
                <View style={style.cardVertical}>
                    <FlatList
                        data={listLatest}
                        keyExtractor={(_item, index) => index}
                        scrollEnabled={false}
                        renderItem={latestMovie} />
                </View>
            </View>

        </ScrollView>
    )
}

export default Home