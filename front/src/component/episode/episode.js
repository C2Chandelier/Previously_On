import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { useNavigate ,Link, useLocation} from 'react-router-dom';

export default function Episode() {
    const params = useLocation();
    console.log("PARAMASS",params.state.state.code)
    return(
        <div>
            <img src={params.state.state.image}></img>
            <p>{params.state.state.code}</p>
            <p>{params.state.state.title}</p>
            <Link to={"/home"}>Retour</Link>
        </div>
    )
}