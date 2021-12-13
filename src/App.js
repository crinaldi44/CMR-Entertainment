import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
            <Route path="/testimonials">
                <Testimonials/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
