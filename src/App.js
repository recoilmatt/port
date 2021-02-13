import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
//import { TransitionGroup, CSSTransition } from "react-transition-group";

import DataProvider from "./components/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <Route>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Menu">
                <Menu />
              </Route>
            </Switch>
          </Route>

          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
