
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header/header'
import Perfil from './components/perfil/perfil'
import Home from './components/home/home'
import { Routes } from 'react-router-dom'
import Produto from './components/produto/Produto'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
    </BrowserRouter>
  )
  
}

export default App
