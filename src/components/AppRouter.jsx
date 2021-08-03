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
import { BlogPost } from './BlogPost'
import { PodcastPost } from './PodcastPost'


export function AppRouter() {
    return (
        <div>
        <Router>
        <Navbar />

        <div className="Content">
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
          <Route exact path="/Podcast">
            <Podcast />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path={`/Blog/:id`}>
            <BlogPost />
          </Route>
          <Route path={`/Podcast/:id`}>
            <PodcastPost />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>
        </div>
    )
}
