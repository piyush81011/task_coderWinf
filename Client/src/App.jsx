import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import TopHeader from './components/TopHeader';
import Up from './components/Up';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <TopHeader />
      <Routes>
        <Route path="/" element={
          <div>
            <Up />
            <div className="container mx-auto px-4 lg:px-14 flex">
              <Sidebar />
              <Home />
            </div>
          </div>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
