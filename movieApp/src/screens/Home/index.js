import { View, StatusBar, FlatList, ScrollView, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { PRIMARY_DARK } from '../../utils/colors'
import { Amita, LibreBaskerville, MediumCard, LoadingBar, RecommendedCard } from '../../components'
import { BASE_URL } from '@env'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from './style'

const Home = ({ navigation }) => {
    const [listRecommended, setListRecommended] = useState([])
    const [listLatest, setListLatest] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getMovies()
        exit()
    }, [])

    // tombol exit 
    const exit = () => {
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
    }

    const getMovies = async () => {
        setIsLoading(true)
        try {
            const results = await axios.get(`${BASE_URL}/movies`)
            console.log(results);
            setListRecommended(results.data.results)
            setListLatest(results.data.results)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }

    const recommendedMovie = (({ item }) => {
        const idMovie = item.id

        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                params: { idMovie }
            })}>
                <RecommendedCard image={item.backdrop_path} text={item.title} />
            </TouchableOpacity>
        )
    })

    const latestMovie = (({ item }) => {
        const idMovie = item.id

        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                params: { idMovie }
            })}>
                <MediumCard image={item.poster_path} title={item.title} rating={item.vote_average} releaseDate={item.release_date} language={item.original_language} adult={item.adult} />
            </TouchableOpacity>
        )
    })

    //recommended
    const recommended = listRecommended.filter(function (item) {
        return item.vote_average >= 5
    }).sort(function (a, b) {
        return b.vote_average - a.vote_average
    })
    // console.log(recommended);

    //latestUpdated
    const latest = listLatest.sort(function (a, b) {
        return new Date(b.release_date) - new Date(a.release_date)
    })
    // console.log(latest);

    return (
        <ScrollView style={style.mainPage}>
            <StatusBar barStyle="light-content" backgroundColor={PRIMARY_DARK} />

            {/* Judul Apps */}
            <Amita style={style.appName}>Livies</Amita>

            {/* Recommended Movie */}
            <View>
                <LibreBaskerville style={style.subTitle}>Recommended</LibreBaskerville>
                <View style={style.cardHorizontal}>
                    <FlatList
                        data={recommended}
                        numColumns={1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_item, index) => index}
                        renderItem={recommendedMovie} />
                </View>
                {LoadingBar(isLoading)}
            </View>

            {/* Latest Movie */}
            <View>
                <LibreBaskerville style={style.subTitle}>Latest Updated</LibreBaskerville>
                <View style={style.cardVertical}>
                    <FlatList
                        data={latest}
                        keyExtractor={(_item, index) => index}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={latestMovie} />
                </View>
                {LoadingBar(isLoading)}
            </View>
        </ScrollView>
    )
}

export default Home