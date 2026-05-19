import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import Header from './components/header/header'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutaspage'
import { ProdutosPages } from './pages/produtos/produtospage'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quemsomos' element={<QuemSomosPage />} />
        <Route path='/cadfrutas' element={<CadastroFrutasPage />} />
        <Route path='/produtos' element={<ProdutosPages />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App