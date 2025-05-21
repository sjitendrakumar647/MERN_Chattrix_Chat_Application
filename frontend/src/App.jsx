import { Routes } from 'react-router-dom'
import './App.css'
import FeatureShowcase from './feature/FeatureShowcase.jsx'
import { Route } from'react-router-dom'
import About from './about/About.jsx'
import Home from './home/home.jsx'
import ContactForm from './components/ContactForm.jsx'
import Loginmodal from './components/Loginmodal.jsx'
import Registermodal from './components/Registermodal.jsx'
import Chatapp from './chatapp/Chatapp.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/features" element={<FeatureShowcase/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<ContactForm/>} />
      <Route path='/Chatapp' element={<Chatapp/>} />
    </Routes>
    <Loginmodal/>
    <Registermodal/>
    </>
  )
}
export default App
