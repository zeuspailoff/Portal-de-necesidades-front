import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Faqs from './pages/FAQs/FAQs.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import Register from './pages/Register/Register.jsx'
import Demands from './pages/Demands/Demands.jsx'
import Demand from './pages/Demands/Demand.jsx'
import NewDemand from './pages/Demands/NewDemand.jsx'
import Profile from './pages/Profile/Profile.jsx'
import UserValidate from './pages/UserValidate/UserValidate.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import GenericError from './components/GenericError.jsx'
import { Suspense } from 'react'
import Loading from './components/Loading/Loading.jsx'
import FloatingButton from './components/FloatingButton/FloatingButton.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './pages/Contact/Contact.jsx'
import About from './pages/About/About.jsx'
import Copyright from './pages/Copyright/Copyright.jsx'
import Privacy from './pages/Privacy/Privacy.jsx'
import Terms from './pages/Terms/Terms.jsx'
import Categories from './pages/Categories/Categories.jsx'
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx'
import NewPassword from './pages/NewPassword/NewPassword.jsx'


function App() {
  return (
    <>
      <ErrorBoundary key={location.key} fallback={<GenericError />}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/demands/new' element={<NewDemand />} />
            <Route path='/demands' element={<Demands />} />
            <Route path='/demands/:id' element={<Demand />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/users/validate/:registrationcode' element={<UserValidate />} />
            <Route path='/users/newPassword/:recoveryCode' element={<NewPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/copyright' element={<Copyright />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/categories' element={<Categories/>}/>


          </Routes>
          <FloatingButton />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
