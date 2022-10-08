import React,{useEffect,useState} from 'react'
import "./rowpost.css"
import axios from "../../axios";
import {imageurl,API_KEY} from "../../constants/constants"
import Youtube from 'react-youtube'
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
  const [urlid,seturlid]=useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
const handleMovie=(id)=>{
axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((res)=>{
if(res.data.results.length != 0){
  seturlid(res.data.results[0])
}else{
  console.log('Array empty');
}
})
}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
              <img onClick={()=>{
                handleMovie(obj.id)

              }} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageurl+obj.backdrop_path}`} alt="Posters" />
          )}
          
       
        </div>
       {urlid && <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost