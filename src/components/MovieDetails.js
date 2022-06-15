import react from 'react';
import { useState } from 'react';
function MovieDetails (){

    const [movie, setMovie] = useState();
  
    function details(){
        fetch('https://movie-task.vercel.app/api/movie?movieId=338953')
        .then(res =>res.json())
        .then(res=>{
            setMovie(res);
            console.log(movie);
        })
    }
    // details();
return(<div>
    Movie Details
    <div>{movie.data.original_title}</div>
    <button onClick={details}>Click</button>

</div>)
}
export default MovieDetails;