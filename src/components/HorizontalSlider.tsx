import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Movie } from '../interfaces/responseMovieDB'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: (title) ? 270 : 230 }}>
            {title && <Text style={{ fontSize: 20, paddingVertical: 5 }}> {title} </Text>}
            <FlatList data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} height={200} width={140} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
