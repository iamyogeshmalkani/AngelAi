import React from 'react'
import Get from "./getuser"
import { useEffect,useState,useParams } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';

export default function UsersTable({users}) {
 const [userdata, setuserdata] = useState([])
 const  [loading, setloading] = useState(true)


  useEffect(async()=>{
    let data =  await Get(users.login);
    setuserdata(data);
    setloading(false);
    
    
    
     
 },[])


     if(loading){
       return (
        <Loading/>

       )
       
     }
     else{
      return (
        <tr >
        <th scope="row">{userdata.name ? userdata.name : users.login}</th>
        <td>{userdata.email ? userdata.email : "Not Found"}</td>
        <td>{userdata.company? userdata.company: "Not Found"}</td>
        <td>{userdata.followers}</td>
        <td>{userdata.following}</td>
        <td><Link to={`/AngelAi/${userdata.login}`}><button type="button" class="btn btn-primary">See user</button></Link></td>
        
        
      </tr>
    )
     }
    
}
