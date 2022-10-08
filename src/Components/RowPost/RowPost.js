import React,{useEffect,useState} from 'react'
import "./rowpost.css"
import axios from "../../axios";
import {imageurl} from "../../constants/constants"
function RowPost(props) {
  useEffect(()=>{
    axios.get(props.url).then(res=>{
      console.log(res.data);
      setMovies(res.data.results)
    }).catch(err=>{
      // alert('network error')
    })
  },[])
  const [movies,setMovies]=useState([])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
              <img className={props.isSmall ? 'smallPoster':'poster'} src={`${imageurl+obj.backdrop_path}`} alt="Posters" />
          )}
          
       
        </div>
    </div>
  )
}

export default RowPost