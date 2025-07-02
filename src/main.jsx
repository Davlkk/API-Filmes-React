import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './pages/details.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/details/:id' element={<Details />}/>
  </Routes>
  </BrowserRouter>,
)
