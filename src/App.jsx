import { Route, Routes } from 'react-router-dom'
import Header from './components/General/Header/header'
import Footer from './components/General/Footer/footer'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Service from './pages/OurService/OurService'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Admin from './pages/Admin/Admin'
import AddEmployee from './components/Admin/AddEmployee/AddEmployee'
import AddCustomer from './components/Admin/AddCustomer/AddCustomer'
import Employees from './components/Admin/Employees/Employees'
import Customers from './components/Admin/Customers/Customers'
import { useEffect } from 'react'
import axios from 'axios'

useEffect(()=>{
  const user = axios()
},[])


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
            <Route path='add_employee' element={<AddEmployee />}/>
            <Route path='add_customer' element={<AddCustomer />}/>
            <Route path='employees' element={<Employees />}/>
            <Route path='customers' element={<Customers/>} />
            <Route path='*' element={<h1>Under constraction</h1>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App