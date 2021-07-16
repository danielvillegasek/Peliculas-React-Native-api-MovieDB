import React, { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, ResponseMovieDB } from '../interfaces/responseMovieDB'

interface MovieState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upComing: Movie[]
}

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)
    const [moviesState, setmoviesState] = useState < MovieState > ({
        nowPlaying : [],
        popular : [],
        topRated : [],
        upComing : [],
    })


    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get < ResponseMovieDB > ('/now_playing')
        const popularPromise = movieDB.get < ResponseMovieDB > ('/popular')
        const topRatedPromise = movieDB.get < ResponseMovieDB > ('/top_rated')
        const upComingPromise = movieDB.get < ResponseMovieDB > ('/upcoming')

        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upComingPromise])

        setmoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upComing: response[3].data.results,
        })

        //console.log(peliculasRecientes)
        setisLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
