import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import { Movie } from '../interfaces/responseMovieDB'

interface Props {
    movie: Movie
    height? : number
    width? : number
}

export const MoviePoster = ({ movie, height=400, width=280}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} style={{ height, width, marginHorizontal: 7 }} onPress={ () => navigation.navigate('DetailScreen', movie)}>
            <View style={style.cardBody}>
                <Image style={style.image} source={{ uri }} />
            </View>
        </TouchableOpacity>
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

        elevation: 7,
        backgroundColor:'white'
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },

})