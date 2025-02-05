
import './App.css'
import Home from './components/home'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Navbar from './components/navbar'
function App() {

  return (
    <>
    <Router>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>

    </Router> 
    </>
  )
}

export default App
