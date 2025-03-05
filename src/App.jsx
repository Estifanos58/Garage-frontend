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
import CustomerDetails from './pages/Customer/CustomerDetails'
import ServiceList from './components/Admin/ServiceList/ServiceList'
import NewOrder from './components/Admin/NewOrder/NewOrder'
import Orders from './components/Admin/Orders/Orders'
import Change from './pages/ChangePassword/Change'
import Forgot from './pages/Forgot/Forgot'
import spinner from './assets/Spinner-2.gif'
import Dash from './components/Employee/Dashboard/Dashboard'
import EmOrders from './components/Employee/Orders/EmOrders'

function App() {

  // const [user, setUserInfo] = useState({});
  const {userInfo,setUserInfo} = useAppStore();
  const [isLoading, setLoading] = useState(true);
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

const ProtectedRoute = ({ children }) => {

  if (!userInfo || (userInfo.role !== "admin" && userInfo.role !== "manager")) {
      toast.error("You are not allowed!");
     navigate("/");
  } else{
    return children; 
  }
 // Render protected content if authorized
};

const LogedRoute = ({children}) => {
  if(!userInfo.role){
    toast.error("You are not allowed!");
    navigate("/");
  } else {
    return children;
  }
}

  return (
    <div>
      {
        isLoading ?
        <div style={{display: 'flex', flexDirection:"column", gap: "15px", justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <img src={spinner} />
          <h1 style={{fontFamily:"Arial", fontSize:"16px"}}>Loading</h1>
        </div>
        :
        <>
          <Header />
          <Routes> 
          <Route path='/login' element={<Login/>} />
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Service/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/reset-password/:hash" element={<Forgot/>}/>
          <Route path='/dashboard' element={<Dash/>}>
            <Route path='orders' element={<EmOrders />}/>
          </Route>
          <Route path='/change_password' element={<LogedRoute><Change/></LogedRoute>} />
          <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>}>
              <Route index element={<Dashboard/>} />
              <Route path='add_employee' element={<AddEmployee />}/>
              <Route path='add_customer' element={<AddCustomer />}/>
              <Route path='employees' element={<Employees />}/>
              <Route path='customers' element={<Customers/>} />
              <Route path='edit_employee' element={<EditEmployee/>} />
              <Route path='/admin/edit-customer' element={<EditCustomer />} />
              <Route path="/admin/customer-details" element={<CustomerDetails/>}>   
              </Route>
              <Route path="services" element={<ServiceList/>}/>
              <Route path="new_order" element={<NewOrder/>}/>
              <Route path="orders" element={<Orders/>}/>
              <Route path='*' element={<h1>Under constraction</h1>} />
          </Route>
          </Routes>
          <Footer />
      </>
      }
      
    </div>
  )
}

export default App