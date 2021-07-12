import React, { useEffect } from 'react'
import { useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, ResponseMovieDB } from '../interfaces/responseMovieDB'

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)
    const [peliculasRecientes, setpeliculasRecientes] = useState < Movie[] > ([])

    const getMovies = async () => {
        const resp = await movieDB.get < ResponseMovieDB > ('/now_playing')
        setpeliculasRecientes(resp.data.results)
        //console.log(peliculasRecientes)
        setisLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        peliculasRecientes,
        isLoading
    }
}
