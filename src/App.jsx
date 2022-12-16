import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Index from './Screens/Index';
import Login from './Screens/Login';
import Carrusel from './Screens/carrusell';

function App() {
  return(
  <HashRouter>
    <Route exact path="/">
        <Redirect to="/Login" />
      </Route>
      <Route path="/Login" component={Login} />
      <Route path="/Index" component={Index} />
      <Route path="/Carrusel" component={Carrusel} />
    </HashRouter>
  );
}

export default App;



