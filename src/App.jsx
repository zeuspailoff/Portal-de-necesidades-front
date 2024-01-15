import './App.css'
import Header from './components/Header/Header.jsx'
//import Footer from './assets/global/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
function App() {
  return (
    <>
    {/*LO COMENTO PORQUE SE DUPLICA, MIRAR: <Header /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
    </>
  )
}

export default App
