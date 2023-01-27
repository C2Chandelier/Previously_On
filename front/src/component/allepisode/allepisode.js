import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState,useRef } from "react";
import { useNavigate ,Link, useLocation } from 'react-router-dom';


export default function Allepisode() {
    const [refresh,setRefresh] = useState(0);
    const params = useLocation();
    const [episodedelasaison,setEpisodedelasaison] = useState();
    const nombresaison = params.state.state[0]
    const id_series = params.state.state[1]

    useEffect(() => {
        axios.get("https://api.betaseries.com/shows/episodes?client_id=8e5e3832e2c7&season="+nombresaison+"&token=87c53f44167d&id="+id_series)
        .then((res)=>{
            setEpisodedelasaison(res.data.episodes)
        })
    },[refresh]);
    
   function vu(e){
   let  id_ep = e.target.value
   axios.post("https://api.betaseries.com/episodes/watched?client_id=8e5e3832e2c7&token=87c53f44167d&id="+id_ep)
   .then((res)=>{

       setRefresh(refresh +1)
    })
   }
   function decocher(e){
    let id_ep = e.target.value
    axios.delete("https://api.betaseries.com/episodes/watched?client_id=8e5e3832e2c7&token=87c53f44167d&id="+id_ep)
    .then((res)=>{
        setRefresh(refresh +1)
    })
   }
   
    
    return(
        <div>
           {episodedelasaison?.map((res)=>(
            res.season === nombresaison && 
            <div className='d-flex'> 
            <p>{res.code} {res.title} </p>

            {res.user.seen === true
            ? <button value={res.id} onClick={(e)=>decocher(e)}> &#x2714; </button> 
            : <button value={res.id} onClick={(e)=>vu(e)}> VU </button>}
            </div>     
            ))}
        </div>
    )
}