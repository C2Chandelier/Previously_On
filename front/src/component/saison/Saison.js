import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { useNavigate ,Link, useLocation} from 'react-router-dom';
import './Saison.css'

export default function Saison() {
    const [episode,setEpisode] = useState();
    const params = useLocation();
    const id_serie = params.state.state.toString()
    console.log("oui",id_serie)
    useEffect(() => {
        axios.get("https://api.betaseries.com/shows/display?client_id=8e5e3832e2c7&id="+id_serie)
        .then((res)=>{
            setEpisode(res.data.show.seasons_details)
        })
    },[]);
    console.log("saison",episode)
    
    
  
    return(
        <div>
         { episode !== null && episode !== undefined ?
            episode.map((item)=>(
                <p><Link to={"/allepisode"} state={{state : [item.number,id_serie]}}>Saison : {item.number}  Nombre d'episode : {item.episodes}</Link></p>
            )):null
             
         }  
            
        </div>
    )
}