import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header.tsx';
import Footer from './components/common/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';

function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
