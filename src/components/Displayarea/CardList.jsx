import { useEffect, useState } from 'react'
import { AUTH_TOKEN, MOVIE_LIST_ENDPOINT } from '../../utils/constants'
import './cardlist.css'
import { SingleCard } from './SingleCard'
import axios from 'axios';


const CardList = () => {

    const [movies,setMovieData]= useState([]);
    const getMovieListData = async()=>{
        try{
            const movieResponse = await axios.get(MOVIE_LIST_ENDPOINT,{
                headers:{
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            })
            setMovieData(movieResponse.data.results)
        } catch(error){
            console.log("Error fetching movie data",(error));          
        }
    }
    useEffect(()=>{
        getMovieListData()
    },[])

    return(
        <>          
            <h3 className="card-general-title">Top rated movies</h3>
            <div className='card-container'>
                {movies.map((movie)=>(
                    <SingleCard key={movie.id} movie={movie}/>
                ))}
            </div>               
        </>
    )
}

export default CardList;


