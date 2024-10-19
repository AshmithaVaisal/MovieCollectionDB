import { useEffect, useState } from 'react'
import './search.css'
import { AUTH_TOKEN, BASE_URL, MOVIE_LIST_BANNER } from '../../utils/constants'
import axios from 'axios'

export const SearchBar = () => {

    const[bannerImage,setBannerimage]=useState([])
    const[currentIndex,setCurrentIndex]=useState(0)

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

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>
                prevIndex === bannerImage.length-1 ? 0 : prevIndex+1
            )
        },2000)
        return ()=> clearInterval(interval)
    },[bannerImage])

    return (
        <>          
            <div className="banner-container">
                {bannerImage.length > 0 ?(
                    bannerImage.slice(0,5).map((movie)=>(
                        <div key={movie.id} className="banner-slide">
                            <img src={`http://image.tmdb.org/t/p/original${bannerImage[currentIndex].backdrop_path}`} alt="{movie.title}" />                        
                                <h1>"Hello, Film Lovers!</h1>
                                <h2>Explore more Movies,Tv shows and your favourite People."</h2>
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