import { Route, Routes, useNavigate } from 'react-router-dom'
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
import { toast } from 'react-toastify'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import EditEmployee from './components/Admin/EditEmployee/EditEmployee'
import EditCustomer from './components/Admin/EditCustomer/EditCustomer'


function App() {

  // const [user, setUserInfo] = useState({});
  const {userInfo,setUserInfo} = useAppStore();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getInfo = async ()=> {
      try {
        setLoading(true);
        const user = await axios.get(USER_INFO,{withCredentials: true});
        // console.log("RESPONE FROM THE BACKEND: ", user);
        if(user.data.success) {
          setUserInfo(user.data.data)
        }else {
          console.log("No user found");
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error: ", error);
      }
    }
useEffect(()=>{
  getInfo();
},[])

if(isLoading) return (
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <h1>Loading</h1>
  </div>
)

const ProtectedRoute = ({ children }) => {

  if (!userInfo || (userInfo.role !== "admin" && userInfo.role !== "manager")) {
      toast.error("You are not allowed!");
     navigate("/");
  } else{
    return children; 
  }

 // Render protected content if authorized
};

  return (
    <div>
      <Header />
       <Routes> 
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Service/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>}>
            <Route index element={<Dashboard/>} />
            <Route path='add_employee' element={<AddEmployee />}/>
            <Route path='add_customer' element={<AddCustomer />}/>
            <Route path='employees' element={<Employees />}/>
            <Route path='customers' element={<Customers/>} />
            <Route path='edit_employee' element={<EditEmployee/>} />
            <Route path='/admin/edit-customer' element={<EditCustomer />} />
            <Route path='*' element={<h1>Under constraction</h1>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App