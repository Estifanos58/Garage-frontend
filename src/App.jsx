import { Route, Routes } from 'react-router-dom'
import Header from './components/General/Header/header'
import Footer from './components/General/Footer/footer'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Service from './pages/OurService/OurService'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Admin from './pages/Admin/Admin'

function App() {
  return (
    <div>
      <Header />
       <Routes> 
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Service/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path='/admin' element={<Admin />}>
            
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App