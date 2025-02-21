import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/header'
function App() {
  return (
    <div>
      <Header />
       <Routes> 
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/> */}
      </Routes>
    </div>
  )
}

export default App