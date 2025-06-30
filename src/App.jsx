import {Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Notfound from './components/Notfound';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
<header>
      <Header /></header>
      <main className=" overflow-y-auto"> {/* Optional padding if navbar is fixed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} /> 
         <Route path="*" element={<Notfound />} />
          </Routes>
      </main>
          <footer>
      <Footer /></footer>
   
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div >
  
  )
}

export default App
