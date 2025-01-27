import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
