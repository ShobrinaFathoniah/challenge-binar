import { View, StatusBar, FlatList, ScrollView, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { MAIN_COLOR } from '../../utils/colors'
import { Amita, MiniCard, LibreBaskerville, MediumCard } from '../../components'
import { BASE_URL, ACCESS_TOKEN, IMAGE_URL } from '@env'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from './style'

const Home = ({ navigation }) => {
    // API masih belum sesuai
    const [listRecommended, setListRecommended] = useState([])
    const [listLatest, setListLatest] = useState([])
    const [listGenre, setListGenre] = useState([])

    // tombol exit 
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Do you want to exit the application?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [])

    useEffect(() => {
        getRecommendedMovie()
        getLatestMovie()
    }, [])

    const getRecommendedMovie = async () => {
        try {
            const results = await axios.get(`${BASE_URL}/movies`)
            console.log(results);
            setListRecommended(results.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    const recommendedMovie = (({ item }) => {
        const idMovie = item.id
        
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                params: { idMovie }
            })}>
                <MiniCard image={`${item.poster_path}`} />
            </TouchableOpacity>
        )
    })

    const getLatestMovie = async () => {
        try {
            const results = await axios.get(`${BASE_URL}/movies`)
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
                <MediumCard image={`${item.poster_path}`} title={item.title} rating={item.vote_average} releaseDate={item.release_date} genre={item.genre_ids} />
            </TouchableOpacity>
        )
    })

    // const getGenreMovie = async () => {
    //     try {
    //         const res = await axios.get(`${BASE_URL}genre/movie/list`, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
    //         console.log(res);
    //         setListGenre(results)
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