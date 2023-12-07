import './App.css'
import Loading from './components/Loading'
import Home from './pages/Home'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <ul>
        <li><NavLink to="/nosotros">SOBRE NOSOTROS</NavLink></li>
        <li><NavLink to="/home">INICIO</NavLink></li>
      </ul>






      

      <AppRouter />

    </>
  )
}

export default App
