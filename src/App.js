import './App.css';

import Home from './component/pages/Home'
import Navbar from './component/inc/Navbar'
import Footer from './component/inc/Footer'

function App() {
  return (
    <div className="container-fluid g-0 bg-dark">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
