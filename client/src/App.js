import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./views/landing/Landing";
import NotFound from "./views/notFound/NotFound";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import AboutMe from "./views/about/about";
import PokemonCreate from './views/create/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/about" component={AboutMe} />
          <Route ath="/add-pokemon" component={PokemonCreate}/>

          {/* En caso de que no encuentre la página */}
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
