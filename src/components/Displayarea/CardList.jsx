import { useEffect, useState } from 'react'
import { AUTH_TOKEN, MOVIE_LIST_ENDPOINT } from '../../utils/constants'
import './cardlist.css'
import { SingleCard } from './SingleCard'
import axios from 'axios';


const CardList = () => {

    const [movies,setMovieData]= useState([]);

    const getMovieListData = async() => {
    const {moviedata} =  await axios.get(MOVIE_LIST_ENDPOINT,{
        headers:{
            Authorization:`Bearer ${AUTH_TOKEN}`
        }
    })
    setMovieData(moviedata)
    }
    useEffect(()=>{
        getMovieListData()
    },[])

    return(
        <>
            <div className="card-container">
                <h2 className="card-general-title">Top rated movies</h2>
                <SingleCard/>
            </div>
        </>
    )
}

export default CardList;


