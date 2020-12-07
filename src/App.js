// Imports from Router
import { Switch, Route, useLocation } from "react-router-dom";

// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

// Import Components
import Nav from "./components/Nav";

// Import Global Styles
import GlobalStyle from "./components/GlobalStyle";

// Import Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
