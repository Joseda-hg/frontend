import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Ejercicio } from "./components/Ejercicio"
import { Home } from "./components/Home"
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
<Router>
  <Navbar />
  <Switch> 
    <Route exact path= "/">
      <Home />
    </Route>
    <Route path = "/ejercicios">
<Ejercicio />
    </Route>
  </Switch>
  <Footer />
</Router>
    </>
  )
}


