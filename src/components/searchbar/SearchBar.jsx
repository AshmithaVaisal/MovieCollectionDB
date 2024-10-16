import { useEffect, useState } from 'react'
import './search.css'
import { AUTH_TOKEN, BASE_URL, MOVIE_LIST_BANNER } from '../../utils/constants'
import axios from 'axios'

export const SearchBar = () => {

    const [bannerImage,setBannerimage]=useState([])

    const getBannerImageData = async() =>{
        try{
            const imageData = await axios.get(MOVIE_LIST_BANNER,{
                headers:{
                    Authorization:`Bearer ${AUTH_TOKEN}`
                }
            })
            console.log(imageData.data)
            setBannerimage(imageData.data.results)
        }catch(error){
            console.log("error fetching data",error);
            
        }
    };
    useEffect(()=>{
        getBannerImageData()
    },[]);

    return (
        <>
            {/* <div className="search-container">
                <h1>WELCOME TO FD</h1>
                <h2>Explore more Movies,Tv shows and People!</h2>
                <div className="search-wrapper">
                    <input type="text" placeholder="Enter a movie name"/>
                    <button >Search</button>
                </div>                
            </div> */}

            {/*only banner style */}
            
            <div className="banner-container">
                {bannerImage.length > 0 ?(
                    bannerImage.slice(0,5).map((movie)=>(
                        <div key={movie.id} className="banner-slide">
                            <img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="{movie.title}" />                        
                                <h1>Welcome to FD!</h1>
                                <h2>Explore more Movies,Tv shows and People!</h2>
                                <div className="search-wrapper">
                                    <input type="text" placeholder="Enter a movie name"/>
                                    <button >Search</button>
                                </div>                            
                        </div>
                    ))
                ):(
                    <p>Loading.....</p>
                )}
            </div>
 
        </>
    )
}