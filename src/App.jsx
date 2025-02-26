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
import { useEffect, useState } from 'react'
import axios from 'axios'
import { USER_INFO } from './utils/constant'
import { useAppStore } from './hook/store'


function App() {

  // const [user, setUserInfo] = useState({});
  const {userInfo,setUserInfo} = useAppStore();

const getInfo = async ()=> {
  const user = await axios.get(USER_INFO,{withCredentials: true});
  console.log("RESPONE FROM THE BACKEND: ", user);
  if(user.data.success) setUserInfo(user.data.data);

  if(!user.data.success) {
    console.log("No user found");
  }


}

useEffect(()=>{
  getInfo();
  // if(userInfo) console.log("User Info: ", userInfo);
},[])


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