import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, MovieCredits, MovieFullDetails } from "../interfaces/responseMovieDB"

interface MovieDetails {
    isLoading: boolean;
    movieFull? : MovieFullDetails;
    cast: Cast[];

}

export const useMovieDetails = (movieId: number) => {
    const [movieDetail, setMovieDetail] = useState < MovieDetails > ({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get < MovieFullDetails > (`/${movieId}`);
        const castPromise = movieDB.get < MovieCredits > (`/${movieId}/credits`);

        const  [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailsPromise,castPromise])

        setMovieDetail({
            isLoading: false, 
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
       getMovieDetails()
    }, [])

    return {
        ...movieDetail
    }
}