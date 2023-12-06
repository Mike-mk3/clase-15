import './App.css'
import Loading from './components/Loading'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

function App() {
 
  return (
    <>

      <ul>
        <li><NavLink to="/nosotros">SOBRE NOSOTROS</NavLink></li>
      </ul>

      <Loading/>

      <AppRouter />

    </>
  )
}

export default App
