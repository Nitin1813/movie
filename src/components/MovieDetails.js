import react, { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Movie from './movieList';
function MovieDetails (props){
const [movie, setMovie] = useState([]);
    // const [movie, setMovie] = useState();
   
    useEffect(()=>{
      setMovie({props})
    //  console.log({movie});
    },[]);
    // function details(){
    //     fetch('https://movie-task.vercel.app/api/movie?movieId=338953')
    //     .then(res =>res.json())
    //     .then(res=>{
    //         setMovie(res);
    //         console.log(movie);
    //     })
    // }
    // details();
return(<div>
    
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        {props.movie.original_title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.movie.id}</h4>
        <p>
          {props.movie.overview}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>


    </div>)
}
export default MovieDetails;