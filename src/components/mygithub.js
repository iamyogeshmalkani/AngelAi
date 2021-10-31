import React from 'react'
import { useEffect,useState } from 'react';
import Get from "./getuser"
import Loading from './loading';

export default function Mygithub({match}) {
   const [mydata, setmydata] = useState([])
   const [loading,setloading] = useState(true);
   var username="";
   if(match.params.id){
       console.log('true');
       username=match.params.id;
   }
   else{
       username="iamyogeshmalkani";
   }
   console.log(username);

     
    const [users, setusers] = useState({});
    useEffect(async()=>{
       let data =  await Get(username);
       setmydata(data);
       setloading(false);
       
       
        
    },[match.params])

    if(loading){

        return (
            <Loading />
        
           
        )
    }
    else{
        return (
            <div class="card" >
            <img src={mydata.avatar_url} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{mydata.name ? mydata.name : mydata.login}</h5>
                <p class="card-text">{mydata.bio ? mydata.bio : "Bio"}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Email:</b> {mydata.email ? mydata.email : "Not Found"}</li>
            <li class="list-group-item"><b>Company:</b>  {mydata.company ? mydata.company : "Not Found"}</li>
                <li class="list-group-item"><b>Followers:</b> {mydata.followers}</li>
                <li class="list-group-item"><b>Followings:</b> {mydata.following}</li>
                
            </ul>
            
        </div>
            
        )
    }
   

   
}
