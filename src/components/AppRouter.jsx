import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Ejercicio } from "./Ejercicio"
import { Home } from "./Home"
import { Footer } from './Footer'
import { Blog } from "./Blog"
import { Podcast } from './Podcast'
import { About } from './About'
import { Contact } from './Contact'
import { Post } from './Post'


export function AppRouter() {
    return (
        <div>
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
          <Route path={`/Blog/:id`}>
            <Post />
          </Route>
        </Switch>
        <Footer />
      </Router>
        </div>
    )
}
