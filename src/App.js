import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UsersTable from './components/usersdata';
import Mygithub from './components/mygithub';
import { useEffect, useState } from 'react';

function App() {
  const url = "https://api.github.com/users";

  const [users, setusers] = useState([]);
  

  useEffect(async () => {
    const url = "https://api.github.com/users";
    

    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      setusers(data);
     
    } catch (error) {
      console.log(error);
    }



  }, [])

  return (
    <div className="App">
    <h1> yogesh<h1/>
      
     

      
      
      <Router>
          <Navbar />
        <Switch>
          <Route  path="/AngelAi" exact component={() => <Home Data={users}/>} />
          <Route  path="/AngelAi/:id"    component={ Mygithub } />
          <Route  path="/developer" exact  component={ Mygithub }/>
        </Switch>
      

      
    </Router>

    </div>
  )
}

export default App;
