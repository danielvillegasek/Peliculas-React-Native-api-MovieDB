import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { Cast, MovieFullDetails } from '../interfaces/responseMovieDB'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem'

interface Props {
    movieFull: MovieFullDetails
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20, marginBottom: 30 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" size={16} />
                    <Text> {movieFull.vote_average} </Text>

                    <Text> - {movieFull.genres.map(g => g.name).join(', ')} </Text>
                </View>

                <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10, marginBottom:5 }}>Historia </Text>
                <Text style={{ fontSize: 15, textAlign: 'justify' }}>{movieFull.overview} </Text>

                <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10, marginBottom:5 }}>Presupuesto </Text>
                <Text style={{ fontSize: 15, textAlign: 'justify' }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })} </Text>

                <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 10, marginBottom:5 }}>Reparto </Text>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />  }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    
                </View>
            </View>
        </>
    )
}
