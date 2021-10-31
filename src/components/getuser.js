 const getuser=async(username)=>{
    const url="https://api.github.com/users";

    try {
      let res = await fetch(url+'/'+username);
       var data = await res.json();
       console.log("specific user");
    return data;
       
  } catch (error) {
      console.log(error);
  }
  return data;
         
  }
  export default getuser