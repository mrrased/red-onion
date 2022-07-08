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
import PaymentMethod from './Pages/Cart/Checkout/PaymentMethod/PaymentMethod';
import Order from './Pages/Dashboard/Order/Order';
import DashMenu from './Pages/Dashboard/DashMenu/DashMenu';
import Review from './Pages/Dashboard/Review/Review';
import Settings from './Pages/Dashboard/Setting/Settings';
import Payment from './Pages/Dashboard/Payment/Payment';
import Account from './Pages/Dashboard/Account/Account';
import Help from './Pages/Dashboard/Help/Help';
import Employer from './Pages/Dashboard/Employer/Employer';
import DashHome from './Pages/Dashboard/DashHome/DashHome';
import Edit from './Pages/Dashboard/DashMenu/Edit/Edit';



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
                  <Route path='/dashboard/order' element={<Order />}></Route>
                  <Route path='/dashboard/dashboard-menu' element={<DashMenu />}></Route>
                  <Route path='/dashboard/dashboard-menu/:editKey' element={<Edit />}></Route>
                  <Route path='/dashboard/review' element={<Review />}></Route>
                  <Route path='/dashboard/settings' element={<Settings />}></Route>
                  <Route path='/dashboard/payment' element={<Payment />}></Route>
                  <Route path='/dashboard/account' element={<Account />}></Route>
                  <Route path='/dashboard/employer' element={<Employer />}></Route>
                  <Route path='/dashboard/dash-home' element={<DashHome />}></Route>
                  <Route path='/dashboard/help' element={<Help />}></Route>
                </Route>
                
                <Route path="/review/:reviewId" element={<ReviewFood />}></Route>
                <Route path="/cartDrawer" element={<CartDrawer />}></Route>
                <Route path="/checkout/payment-Method" element={<PaymentMethod />}></Route>

                <Route path="/checkout" element={<PrivateRoute><ConfirmOrder /></PrivateRoute>}></Route>

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
