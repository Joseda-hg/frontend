import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Ejercicio } from "./Ejercicio";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Blog } from "./Blog";
import { About } from "./About";
import { Contact } from "./Contact";
import { Post } from "./Post";
import { Newsletter } from "./Newsletter";
import { Terminal } from "./Terminal";
import { Breakout } from "./Breakout";
import { Clicker } from "./Clicker";

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
            <Route exact path="/breakout">
              <Breakout />
            </Route>
            <Route exact path="/clicker">
              <Clicker />
            </Route>
            <Route path="/ejercicios">
              <Ejercicio />
            </Route>
            {/* <Route path="/alimentos">
              <Alimento />
            </Route> */}
            <Route exact path="/blog">
              <Blog />
            </Route>
            {/* <Route exact path="/Podcast">
              <Podcast />
            </Route> */}
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/Newsletter">
              <Newsletter />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Terminal">
              <Terminal/>
            </Route>

            <Route path={`/blog/:id`}>
              <Post type="Post" />
            </Route>
            {/* <Route path={`/podcast/:id`}>
              <Post type="Podcast" />
            </Route> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}
