import { useNavigation } from '@react-navigation/native'
import React, { Props, useState } from 'react'
import { ActivityIndicator, Button, Dimensions, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'

const {width:windowWidth} = Dimensions.get('window')

export const HomeScreen = () => {

    const { peliculasRecientes, isLoading } = useMovies();
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
        <View style={{ paddingTop: 10 + top }}>
            <View style={{height:440}}>
            <Carousel
                data={peliculasRecientes}
                renderItem={({item} : any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={280}
            />
            </View>
        </View >
    )




}
