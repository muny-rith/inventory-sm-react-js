// import './App.css';
// import Header from './components/Header/Header';
// import SideBar from './components/SideBar/SideBar';
// import Footer from './components/Footer/Footer';

import MainLayout from "../src/layouts/MainLayout/MainLayout";

import Dashboard from './pages/dashboard/dashboard'
import Product from './pages/product/product';
import Category from './pages/category/category'
import Loan from './pages/loan/loan'
import Worker from './pages/worker/worker'
import Report from './pages/report/report'





import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/report" element={<Report />} />
      </Route>
    </Routes>
  );
}

export default App;
