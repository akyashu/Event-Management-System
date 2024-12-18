import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Login from './components/Login';
import VendorMain from './components/VendorMain';
import AdminMain from './components/AdminMain';
import UserMain from './components/UserMain';
import Home from './components/home';
import YourItem from './components/Vendor/youritem';
import AddNewItem from './components/Vendor/AddNewItem';
import Transaction from './components/Vendor/Transaction';
import Cart from './components/User/Cart';
import GuestList from './components/User/GuestList';
import OrderStatus from './components/User/OrderStatus';
import Vendor from './components/User/Vendor';
import VendorList from './components/Vendor/vendors';
import AdminDashboard from './components/Admin/adminDashboard';
import VendorDashboard from './components/Vendor/vendorDashboard';
import AddEvent from './components/User/AddEvent';
import Signup from './components/register';
function App() {
  return (
    <div>
     
      <Routes>
        <Route exact path="/vendor/vendor-list"  element={<VendorList />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/vendor" element={<VendorMain />} />
        <Route exact path="/admin" element={<AdminMain />} />
        <Route exact path="/user" element={<UserMain />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/vendor/add-event" element={<AddEvent />} />
        <Route exact path="/vendor/your-item" element={<YourItem />} />
        <Route exact path="/vendor/add-new-item" element={<AddNewItem />} />
        <Route exact path="/vendor/transaction" element={<Transaction />} />
        <Route exact path="/user/vendor"  element={<Vendor />} />
        <Route exact path="user/cart"  element={<Cart />} />
        <Route exact path="/user/guest-list"  element={<GuestList />} />
        <Route exact path="/vendor/order-status"  element={<OrderStatus />} />
        <Route exact path="/vendor/dashboard"  element={<VendorDashboard />} />
        <Route exact path="/admin/dashboard"  element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
