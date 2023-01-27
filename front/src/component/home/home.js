import axios from 'axios';
import { useEffect, useState ,useLocation } from 'react';
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";


export default function Home(){
  
    const [data,setData] = useState()
    useEffect(() => {
    axios.get('https://api.betaseries.com/shows/member?client_id=8e5e3832e2c7&token=87c53f44167d')
    .then((res)=>{ 
        setData(res.data.shows)
    })
},[]);
console.log(data)

    function archiver(){
        
    }
    
    return(
        <div>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Illustration</th>
          <th>Titre</th>
          <th>Next episode à regarder</th>
          <th>Totaux</th>
          <th>%</th>
          <th>Archiver</th>
          <th>Voir les episodes</th>
        </tr>
      </thead>
      <tbody>
        {data !== null && data !== undefined ?
        data.map((item)=>(
        <tr>
            <th><img src={item.images.box}></img></th>
            <th>{item.original_title}</th>
            <td><Link to={"/episode"} state={{ state: item.user.next}}>{item.user.next.code}</Link></td>
            <td>{item.seasons} saisons, {item.episodes} episodes</td>
            <td>{item.user.status}%  | {item.user.remaining} ép. |</td>
            <td onClick={archiver}>&#10007;</td>
            <td><Link to={"/saison"} state={{state : item.id}}>&#10007;</Link></td>
        </tr>
        ))
         :null
        }
        
      </tbody>
    </Table>
    {data !== null && data !== undefined && data[0].user.archived === true ?
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>Illustration</th>
        <th>Titre</th>
        <th>Next episode à regarder</th>
        <th>Totaux</th>
        <th>%</th>
        <th>Archiver</th>
      </tr>
    </thead>
    <tbody>
      {data !== null && data !== undefined ?
      data.map((item)=>(
      <tr>
          <th><img src={item.images.box}></img></th>
          <th>{item.original_title}</th>
          <td>{item.user.next.code}</td>
          <td>{item.seasons} saisons, {item.episodes} episodes</td>
          <td>{item.user.status}%  | {item.user.remaining} ép. |</td>
          <td onClick={archiver} >&#10007;</td>
      </tr>
      ))
       :null
      }
      
    </tbody>
  </Table>: null
    }
  </div>
    )
}