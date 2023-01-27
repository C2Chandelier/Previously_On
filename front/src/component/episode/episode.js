import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { useNavigate ,Link, useLocation} from 'react-router-dom';

export default function Episode() {
    const ep_id = useLocation().state.data;
    const [infos, setInfos] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(()=>{
        axios.get("https://api.betaseries.com/pictures/episodes?client_id=91a576165315&id="+ep_id)
            .then((resp)=>{
                console.log(resp.data)
                setImage(resp.config.url)
            })
        axios.get("https://api.betaseries.com/episodes/display?client_id=91a576165315&id="+ep_id)
            .then((res)=>{
                setInfos(res.data.episode)
            })
    },[])


    return(
        <div>
            {infos !== null ?
                <div className="Single_product">
                    <div className="img_product">
                         <img
                            src={image}
                            alt={infos.title}
                        />
                    </div>
                    <div className="product">
                        <hr className="col-md-12"></hr>
                        <div className='product_code'>{infos.code}</div>
                        <div className="product_date">Diffusé le : {infos.date}</div>
                        <div className="product_note">note : {infos.note.mean.toFixed(1)}/5</div>
                    </div>
                    <div className="product_desc">
                    <div className="product_title"><h2>{infos.title}</h2></div>
                        <h3>Description :</h3>
                        <p>{infos.description}</p>
                    </div>
                </div>
                : null}
        </div>
    )
}