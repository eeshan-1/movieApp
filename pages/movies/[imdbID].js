import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Post = () => {
  const router = useRouter();
  const { imdbID } = router.query;

const [film, setFilm] = useState(null)
useEffect(()=>{
    axios
        .get(`https://www.omdbapi.com/?apikey=3400aa2e&i=${imdbID}`)
        .then((response) => {
          let result = JSON.parse(JSON.stringify(response));
            let {data} = result;
          setFilm(data);
        });
},[])
if(!film) return null;


  return (
        <div className="container-sm bg-dark">
      
        <div className ="container my-5 movie-page" >
          
          <Image src={film.Poster} alt={film.Title} width="220px" height="300px"/>

        
        <div>
        <div className="text-white">
          <h1 className="text-yellow">{film.Title}</h1>
          <span className="badge badge-primary">{film.Genre}</span>
          <p>{film.Plot}</p>
          <p>{film.Actors}</p>
        </div>
        
        
        </div>
        </div>
        </div>
      
)};

export default Post;