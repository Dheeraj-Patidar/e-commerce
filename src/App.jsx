
import './App.css'
import Home from './components/home'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import BuyerPage from './pages/BuyerPage'
import SellerPage from './pages/SellerPage'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import WishListPage from './pages/WishListPage'
import AddProductPage from './pages/AddProductPage'
import { Toaster } from 'react-hot-toast';

// import { AuthProvider } from './contexts/AuthContext'
// import { CartProvider } from './contexts/CartContext'
// import { useDispatch } from 'react-redux';
// import ProtectedRoute from './components/ProtectedRoute';
// import { login } from './authSlice';

function App() {




  return (
    <>
    <Toaster/>
    <Router>
{/* <AuthProvider> */}
{/* <CartProvider> */}
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
        
        <Route path='/addproduct' element={<AddProductPage/>}/>
        
        <Route path='/buyer' element={
          <BuyerPage/>}
          />
        
        <Route path='/cart' element={
          <CartPage/>}
         />
         <Route path='/wishlist' element={
          <WishListPage/>}
         />
        
        <Route path='/seller' element={
          <SellerPage/>
          }/>

        <Route path='/admin' element={
          <AdminPage/>}/>

      </Routes>
{/* </CartProvider> */}
{/* </AuthProvider> */}
    </Router> 
    </>
  )
}

export default App





{/* <Route path='/buyer' element={
          <ProtectedRoute allowedRoles={['buyer']}><BuyerPage/>
          </ProtectedRoute>}/>
        
        <Route path='/cart' element={
          <ProtectedRoute allowedRoles={['buyer']}><CartPage/>
          </ProtectedRoute>}/>
        
        <Route path='/seller' element={
          <ProtectedRoute allowedRoles={['seller']}><SellerPage/>
          </ProtectedRoute>}/>

        <Route path='/admin' element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPage/>
          </ProtectedRoute>}/> */}