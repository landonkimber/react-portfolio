import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useLocation } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/projects":
        return <Projects />;
      case "/contact":
        return <Contact />;
      case "/settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        {renderContent()}
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
