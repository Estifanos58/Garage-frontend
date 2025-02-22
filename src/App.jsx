import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Login from './pages/Login/Login'
function App() {
  return (
    <div>
      <Header />
       <Routes> 
        <Route path='/login' element={<Login/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App