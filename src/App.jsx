import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Faqs from './pages/Faqs/Faqs.jsx'
import LoginSignup from './pages/Login-Signup/LoginSignup.jsx'
import Demands from './pages/Demands/Demands.jsx'
import Demand from './pages/Demands/Demand.jsx'
import NewDemand from './pages/Demands/NewDemand.jsx'
import Profile from './pages/Profile/Profile.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import GenericError from './components/GenericError.jsx'
import { Suspense } from 'react'
import Loading from './components/Loading/Loading.jsx'

function App() {
  return (
    <>
      <ErrorBoundary key={location.key} fallback={<GenericError />}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login-signup' element={<LoginSignup />} />
            <Route path='/demands/new' element={<NewDemand />} />
            <Route path='/demands' element={<Demands />} />
            <Route path='/demands/:id' element={<Demand />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
