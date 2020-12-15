import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';
import Sobre from './Sobre'
import Eventos from './Eventos'
import Produtos from './Produtos'
import Contactos from './Contactos'
import Home from './Home'
import SimularUtilizadorLogin from './SimularUtilizadorLogin'


export default function App(){
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <SimularUtilizadorLogin setLogin={setLogin}/>
      <Router>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/sobre'>Sobre</Link></li>
            {(login) && (<li><Link to='/eventos'>Eventos</Link></li>)}
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/contactos'>Contactos</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact={true} path='/'>
            <Home />
          </Route>
          <Route path='/sobre'>
            <Sobre />
          </Route>
          {login && (
          <Route path='/eventos'>
            <Eventos />
          </Route>)}
          <Route path='/produtos'>
            <Produtos produto={'vinho'}/>
          </Route>
          <Route path='/contactos'>
            <Contactos />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}
