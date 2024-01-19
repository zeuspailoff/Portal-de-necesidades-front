import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import FAQs from './pages/FAQs/FAQs.jsx'
import Login from './pages/Login/Login.jsx'
import Demands from './pages/Demands/Demands.jsx'
import Demand from './pages/Demands/Demand.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
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
            <Route path='/login' element={<Login />} />
            <Route path='/demands' element={<Demands />} />
            <Route path='/demands/:id' element={<Demand />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/faqs' element={<FAQs />} />

            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
