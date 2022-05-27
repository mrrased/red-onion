import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AuthProvider from './Hooks/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import BreakFastSource from './Pages/Home/MenuBar/BreakFastSource/BreakFastSource';
import ChooseTsFood from './Pages/Shared/ChooseTsFood/ChooseTsFood';
import DinnerSource from './Pages/Home/MenuBar/Dinner/DinnerSource/DinnerSource';
import LunchSource from './Pages/Home/MenuBar/Lunch/LunchSource/LunchSource';
import FoodProduct from './Pages/Home/Food/FoodProduct/FoodProduct';
import ReviewFood from './Pages/Home/Food/FoodReview/FoodItem/ReviewFood';
import NotFound from './Pages/NotFound/NotFound';
import Menu from './Pages/Home/MenuBar/Menu/Menu';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Hooks/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Role from './Pages/Dashboard/Role/Role';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import CartDrawer from './Pages/Cart/CartDrawer/CartDrawer';
import ConfirmOrder from './Pages/Cart/Checkout/ConfirmOrder/ConfirmOrder';



function App() {
  
  return (
    
     <div>
       <AuthProvider>
       <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>

                <Route path="/home/menu" element={<Menu/>}>
                    <Route path="/home/menu/breakfast" element={<BreakFastSource/>}></Route>
                    <Route path="/home/menu/lunch" element={<LunchSource/>}></Route>
                    <Route path="/home/menu/dinner" element={<DinnerSource/>}></Route>
                    <Route path="/home/menu/all" element={<FoodProduct/>}></Route>
                </Route>

                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
                  <Route path='/dashboard/role' element={<Role />}></Route>
                  <Route path='/dashboard/addProduct' element={<AddProduct />}></Route>
                </Route>
                
                <Route path="/review/:reviewId" element={<ReviewFood />}></Route>
                <Route path="/cartDrawer" element={<CartDrawer />}></Route>
                <Route path="/checkout" element={<ConfirmOrder />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/choose" element={<ChooseTsFood />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/footer" element={<Footer />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
       </BrowserRouter>
       </AuthProvider>
     </div>
    
  );
}

export default App;
