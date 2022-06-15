import react from 'react';
import { useState } from 'react';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<script src='https://unpkg.com/react/umd/react/production.min.js'></script>
function Movie(){
    const [movie, setMovie] = useState([]);
    function movielist(){
        fetch("https://movie-task.vercel.app/api/popular?page=1")
            .then(res =>res.json())
            .then(res=>{
                setMovie([...res.data.results]);
                console.log(movie);
            })
    }
    
    
    // movielist();
    return(
        <div>
            
            <button onClick={movielist}>Click To Load Movie</button>
            <div className='moviesContainer'>
                {movie.map(res =>{
                    return <div className='movieContainer'>
                        <img src={"https://image.tmdb.org/t/p/original"+res.poster_path}width="100px"  />
                        <div className='hovver'>
                        <p className='name'>{res.original_title}</p>
                        <span className='lang'>{res.original_language}</span>
                        </div>
                        {/* <button onClick={details()} className="btn btn-primary" >Details</button> */}
                    </div>
                })}
                
            </div>
            {/* {movie.map(res =>{
                    return <div className="card" style="width: 18rem;">
                                <img src={"https://image.tmdb.org/t/p/original"+res.poster_path} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">An item</li>
                                    <li className="list-group-item">A second item</li>
                                    <li className="list-group-item">A third item</li>
                                </ul>
                                <div className="card-body">
                                    <a href='Google.com' className="card-link">Card link</a>
                                    <a href='Google.com' className="card-link">Another link</a>
                                </div>
                            </div>
                })} */}
        </div>
    )
}
export default Movie;