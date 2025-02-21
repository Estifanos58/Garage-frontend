import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
function App() {
  return (
    <div>
      <Header />
       <Routes> 
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App