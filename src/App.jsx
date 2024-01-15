import './App.css'
import Header from './components/Header/Header.jsx'
//import Footer from './assets/global/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Demands from './pages/Demands/Demands.jsx'
import Demand from './pages/Demands/Demand.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'

function App() {
  return (
    <>
    {/*LO COMENTO PORQUE SE DUPLICA, MIRAR: <Header /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/demands' element={<Demands/>}/>
      <Route path='/demand' element={<Demand/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    
    </>
  )
}

export default App
