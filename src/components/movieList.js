import react, { useEffect } from 'react';
import { useState } from 'react';
import MovieDetails from './MovieDetails';
import {Card, Button, ButtonGroup} from 'react-bootstrap';


function Movie(){
    const [movie, setMovie] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    useEffect( ()=>{
        fetch("https://movie-task.vercel.app/api/popular?page=1")
    .then(res =>res.json())
    .then(res=>{
        console.log(res);
        setMovie([...res.data.results]);

        
    })},[])
         function openModel(res){
      
           
            
         }
    
    // movielist();
    return(
        <div>
              {/* <Button onClick={mo()} className="btn btn-primary" >Click</Button> */}
            {/* <input type={number} /> */}
            {/* <div className='moviesContainer'>
                {movie.map(res =>{
                    return <div className='movieContainer' key={res.id}>
                        <img src={"https://image.tmdb.org/t/p/original"+res.poster_path}width="100px"  />
                        <div className='hovver'>
                        <p className='name'>{res.original_title}</p>    
                        <span className='lang'>{res.original_language}</span>
                        </div>
                        <button onClick={details()} className="btn btn-primary" >Details</button>
                     </div>
                })}
                
            </div>  */}
            <div className='moviesContainer'>
                
                {movie.map(res=>{
                   return <div className='movieContainer' key={res.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original"+res.poster_path} />
                        <Card.Body>
                            <Card.Title>{res.original_title}</Card.Title>
                            <Card.Text>
                           Language: {res.original_language} <br />
                           id:{res.id}<br />
                           Release Date: {res.release_date}
                            </Card.Text>
                            <Button variant="primary" onClick={() =>setModalShow(true)} >Know More</Button>
                            <MovieDetails ids={res.id} movie={res} show={modalShow} onHide={()=>{setModalShow(false)}} />
                        </Card.Body>
                        </Card>
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
                })}  */}
        </div>
    )
}
export default Movie;