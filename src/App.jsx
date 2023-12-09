import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'


function App() {
  const [loading, setLoading] = useState(true);

  setTimeout (()=> {
    setLoading (false);
  },1000);

  
  return (
    <>
      {loading ? 
      <Loading /> :
    <>

          <ul >
            <li><NavLink to="/nosotros">SOBRE NOSOTROS</NavLink></li>
            <li><NavLink to="/home">INICIO</NavLink></li>
          </ul>

<AppRouter />
         

         
         <Footer creditos_a="U-CAMP"/> 
        </>}
      

    </>
    
  )
}

export default App
