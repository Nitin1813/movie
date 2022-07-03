import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Movie from './components/movieList';
import reportWebVitals from './reportWebVitals';
import MovieDetails from './components/MovieDetails';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MovieDetails /> */}
    <App />
    {/* <Movie /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
