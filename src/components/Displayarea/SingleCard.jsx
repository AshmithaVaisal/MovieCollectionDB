import './singlecard.css'

export const SingleCard = ({movie}) =>{
    const base_image_url = `https://image.tmdb.org/t/p/original`
    return(
        <>
            <div className="single-card-container">
                <img className='movie-img' src={base_image_url + movie.poster_path} alt="" />       
                <h6>{movie.title}</h6>
                {/* <div className="span-items">
                    <p>Release Date: {movie.release_date}</p>
                    <p>ratings:{movie.vote_average}</p>
                    <p>views:{movie.vote_count}k</p> 
                    <p>Language:{movie.original_language}</p> 
                </div> */}
            </div>
        </>
    )
}