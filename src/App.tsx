import './App.css';
import { AppDownload } from './components/AppDownload';
import { Blog } from './components/Blog';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Greeting } from './components/Greeting';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Rates } from './components/Rates';
import { Subscribe } from './components/Subscribe';
import { Testimonies} from './components/Testimonies';
import { TradeAnywhere  } from './components/TradeAnywhere';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Greeting />
        <Rates />
        <Experience />
        <TradeAnywhere />
        <Blog />
        <Testimonies />
        <AppDownload />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
