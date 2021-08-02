import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Ejercicio } from "./components/Ejercicio"
import { Home } from "./components/Home"
import { Footer } from './components/Footer'
import { Blog } from "./components/Blog"
import { Podcast } from './components/Podcast'
import { About } from './components/About'
import { Contact } from './components/Contact'


export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ejercicios">
            <Ejercicio />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/Podcast">
            <Podcast />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path={`/blog/:id`}>
            Var
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}


