// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

// Import Components
import Nav from "./components/Nav";

// Import Global Styles
import GlobalStyle from "./components/GlobalStyle";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
      <OurWork />
      <ContactUs />
    </div>
  );
}

export default App;
