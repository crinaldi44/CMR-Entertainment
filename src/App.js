import './App.css';
import Navbar from './components/Navbar'
import Announcement from './components/Announcement';
import Footer from './components/Footer'
import Index from './pages/Index';
import About from './pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Announcement content="Website currently in test mode. Please contact with any inquiries!"/>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
