// Import Pages
import AboutUs from "./pages/AboutUs";

// Import Components
import Nav from "./components/Nav";

// Import Global Styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
