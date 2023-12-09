import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'
import Footer from './pages/Footer'


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


         
         <Footer PROPS="U-CAMP"/> 
        </>}
      

    </>
    
  )
}

export default App
