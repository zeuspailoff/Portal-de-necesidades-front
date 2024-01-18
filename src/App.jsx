import './App.css'
import Header from './components/Header/Header.jsx'
//import Footer from './assets/global/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import LoginSignup from './pages/LoginSignup/LoginSignup.jsx'
import Demands from './pages/Demands/Demands.jsx'
import Demand from './pages/Demands/Demand.jsx'
import FAQs from './pages/FAQs/FAQs.jsx'
import Profile from './pages/Profile/Profile.jsx'
import About from './pages/About/About.jsx'
function App() {
  return (
    <>
    {/*LO COMENTO PORQUE SE DUPLICA, MIRAR: <Header /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/signup' element={<LoginSignup/>}/>
      <Route path='/demands' element={<Demands/>}/>
      <Route path='/demand' element={<Demand/>}/>
      <Route path='/faqs' element={<FAQs/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    </>
  )
}

export default App
