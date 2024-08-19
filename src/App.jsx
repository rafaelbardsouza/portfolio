import { useEffect } from 'react';
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', 'english');
    }
  }, []);

  return (
    <>
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;