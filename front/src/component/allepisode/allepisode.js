import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState,useRef } from "react";
import { useNavigate ,Link, useLocation } from 'react-router-dom';


export default function Allepisode() {
    const div = useRef([]);
    const [classname,setClassname] = useState("name");
    const params = useLocation();
    const [episodedelasaison,setEpisodedelasaison] = useState();
    const nombresaison = params.state.state[0]
    const id_series = params.state.state[1]
    useEffect(() => {
        axios.get("https://api.betaseries.com/shows/episodes?client_id=8e5e3832e2c7&summary=true&id="+id_series)
        .then((res)=>{
            setEpisodedelasaison(res.data.episodes)
        })
    },[]);
    console.log(div)
   
    console.log(episodedelasaison)
    return(
        <div>
           {episodedelasaison?.map((res,i)=>(

            res.season === nombresaison && <p ref={el => div.current[i] = el}> {res.code} {res.title}  <button>VU</button></p>
                 
            ))}
        </div>
    )
}