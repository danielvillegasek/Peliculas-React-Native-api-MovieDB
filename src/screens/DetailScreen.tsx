import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native'
import { Movie } from '../interfaces/responseMovieDB'
import { RootStackParams } from '../navigation/StackNav'
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'
import Ionicons from 'react-native-vector-icons/Ionicons'

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {

}

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { isLoading, movieFull, cast } = useMovieDetails(movie.id)

    return (
        <ScrollView>

            <View style={style.cardBody}>
                <Image style={style.image} source={{ uri }} />
            </View>
            <View style={style.boxDescription}>
                <Text style={{ opacity: 0.5 }} >{movie.original_title}</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }} >{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color="grey" style={{ marginVertical: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }


           

        </ScrollView>

    )
}

const style = StyleSheet.create({
    card: {
        width: 280, height: 400
    },
    cardBody: {
        height: screenHeight * 0.70,
        backgroundColor: 'red',
        flex: 7,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,
        overflow: 'hidden',
        elevation: 7,
        //backgroundColor: 'white',
    },
    image: {
        flex: 1,

    },
    boxDescription: {
        padding: 10
    }

})
