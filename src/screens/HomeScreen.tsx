import { useNavigation } from '@react-navigation/native'
import React, { Props, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, Text, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="blue" size={100} />

            </View>
        )
    }
    return (
        /*
            <MoviePoster movie={peliculasRecientes[0]} />
        */
        <ScrollView>
            <View style={{ paddingTop: 45 + top }}>
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={280}
                    />
                </View>
                <HorizontalSlider title={"En cines"} movies={nowPlaying} />

                <HorizontalSlider title={"Populares"} movies={popular} />

                <HorizontalSlider title={"Mejor calificadas"} movies={topRated} />

                <HorizontalSlider title={"Proximamente"} movies={upComing} />


            </View >
        </ScrollView>

    )




}
