import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import { Movie } from '../interfaces/responseMovieDB'

interface Props {
    movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <View style={style.card}>
            <View style={style.cardBody}>
                <Image style={style.image} source={{ uri }} />
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    card: {
        width: 280, height: 400
    },
    cardBody: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 3.62,

        elevation: 10,
        backgroundColor:'white'
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },

})