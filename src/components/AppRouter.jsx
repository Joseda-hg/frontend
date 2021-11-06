import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Ejercicio } from "./Ejercicio";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Blog } from "./Blog";
import { Podcast } from "./Podcast";
import { About } from "./About";
import { Contact } from "./Contact";
import { Post } from "./Post";
import { Newsletter } from "./Newsletter";
import { Alimento } from "./Alimento";

export function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />

        <div id="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ejercicios">
              <Ejercicio />
            </Route>
            <Route path="/alimentos">
              <Alimento />
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
            <Route path="/Newsletter">
              <Newsletter />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>

            <Route path={`/blog/:id`}>
              <Post type="Post" />
            </Route>
            <Route path={`/podcast/:id`}>
              <Post type="Podcast" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
