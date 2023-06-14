import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './modules/Card/Card'
import FormAuth from './modules/FormAuth/FormAuth'
import Condicional from './components/Condicional/Condicional'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/card' element={<Card />}/>
          <Route path='/form-auth' element={<FormAuth/>}/>
          <Route path='/condicional' element={<Condicional/>}/>
        </Routes>
      </Router>
    </>
  )
}
