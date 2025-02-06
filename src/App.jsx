
import './App.css'
import Home from './components/home'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import BuyerPage from './pages/BuyerPage'
import SellerPage from './pages/SellerPage'
import CartPage from './pages/CartPage'
import Navbar from './components/navbar'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'




function App() {



  return (
    <>
    <Router>
<AuthProvider>
<CartProvider>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
        
        <Route path='/buyer' element={<BuyerPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        
        <Route path='/seller' element={<SellerPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        
      </Routes>
</CartProvider>
</AuthProvider>
    </Router> 
    </>
  )
}

export default App
