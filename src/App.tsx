import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import RoutesMap from './components/RoutesMap/RoutesMap'

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <RoutesMap/>
        <Footer/>
      </Router>
    </>
  )
}
