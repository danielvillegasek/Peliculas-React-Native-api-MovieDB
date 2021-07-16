import React from 'react'
import { Image, Text, View } from 'react-native'
import { Cast } from '../interfaces/responseMovieDB'

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={{ flexDirection: 'row', marginEnd: 20, borderRadius: 20 }}>
            {
                actor.profile_path && <Image source={{ uri }} style={{ width: 50, height: 50, marginEnd: 10}} />
            }            
            <View >
                <Text style={{ fontSize: 18 }}>{actor.name}</Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    )
}
