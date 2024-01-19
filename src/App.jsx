import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import LoginSignup from './pages/LoginSignup/LoginSignup.jsx'
import Demands from './pages/Demands/Demands.jsx'
import Demand from './pages/Demands/Demand.jsx'
import FAQs from './pages/FAQs/FAQs.jsx'
import Profile from './pages/Profile/Profile.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import GenericError from './components/GenericError.jsx'
import { Suspense } from 'react'
import Loading from './components/Loading/Loading.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Privacy from './pages/PrivacyPolicy/PrivacyPolicy.jsx'
import Terms from './pages/TermsConditions/TermsConditions.jsx'
import Copyright from './pages/CopyrightPolicy/Copyright.jsx'

function App() {
  return (
    <>
      <ErrorBoundary key={location.key} fallback={<GenericError />}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/demands' element={<Demands />} />
            <Route path='/demands/:id' element={<Demand />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/privacy' element={<Privacy/>}/>
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/copyright' element={<Copyright/>}/>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
