import { View, StatusBar, FlatList, ScrollView, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { MAIN_COLOR, PURPLE_100, PURPLE_500 } from '../../utils/colors'
import { Amita, MiniCard, LibreBaskerville, MediumCard } from '../../components'
import { BASE_URL, ACCESS_TOKEN, IMAGE_URL } from '@env'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import style from './style'
import * as Progress from 'react-native-progress';

const Home = ({ navigation }) => {
    // API masih belum sesuai
    const [listRecommended, setListRecommended] = useState([])
    const [listLatest, setListLatest] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    // loadingBar
    const loadingBar = loading => {
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
        setIsLoading(true)
        try {
            const results = await axios.get(`${BASE_URL}/movies`)
            console.log(results);
            setListRecommended(results.data.results)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }

    const getLatestMovie = async () => {
        setIsLoading(true)
        try {
            const results = await axios.get(`${BASE_URL}/movies`)
            console.log(results);
            const data = results.data.results

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
                <MiniCard image={`${item.poster_path}`} />
            </TouchableOpacity>
        )
    })

    const latestMovie = (({ item }) => {
        const idMovie = item.id

        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail", {
                params: { idMovie }
            })}>
                <MediumCard image={`${item.poster_path}`} title={item.title} rating={item.vote_average} releaseDate={item.release_date} language={item.original_language} adult={item.adult} />
            </TouchableOpacity>
        )
    })

    return (
        <ScrollView style={style.mainPage}>
            <StatusBar barStyle="dark-content" backgroundColor={PURPLE_100} />

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
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(_item, index) => index}
                        renderItem={recommendedMovie} />

                </View>
                {loadingBar(isLoading)}
            </View>


            {/* Latest Movie */}
            <View>
                <LibreBaskerville style={style.subTitle}>Latest Updated</LibreBaskerville>
                <View style={style.cardVertical}>
                    <FlatList
                        data={listLatest}
                        keyExtractor={(_item, index) => index}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                        renderItem={latestMovie} />

                </View>
                {loadingBar(isLoading)}
            </View>

        </ScrollView>
    )
}

export default Home