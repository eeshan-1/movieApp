import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { MList } from "./MList";
import list from './movieList.json';

export default function Home() {
  const [movieName, setMovieName] = useState(null);
  const [movieInfo, setMovieInfo] = useState(null);

  let details = JSON.parse(JSON.stringify(list));

  const fetchMovieInfo = () => {
    try {
      axios
        .get(`https://www.omdbapi.com/?apikey=c5c8e680&s=${movieName}`)
        .then((response) => {
          let result = JSON.parse(JSON.stringify(response));
          const { data } = result;
          const { Search } = data;
          setMovieInfo(Search);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-main bg-warning" >
      <div className="container-sm top-container">
        <h1 className="text-dark text-center">Movie App</h1>

        <input
        className="container-fluid form-control"
          type="text"
          placeholder="Search"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button className="btn btn-dark" href="#" type="submit" onClick={fetchMovieInfo}>
          Search
        </button>
      </div>
      <div>
        {movieInfo ?<MList details={movieInfo}/>:<MList details={list} />}
      </div>
      
    </div>
  );
}