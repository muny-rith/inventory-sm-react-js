import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

import Dashboard from './pages/dashboard/dashboard'
import Product from './pages/product/product';
import Category from './pages/category/category'
import Loan from './pages/loan/loan'
import Worker from './pages/worker/worker'
import Report from './pages/report/report'





import { Route, Routes } from 'react-router-dom';


function App() {
  // const [currentPage, setCurrentPage] = useState(ROUTES.DASHBOARD)
  return (
    <div className="App">
      <Header></Header>
      <main>
        <SideBar></SideBar>
        <div className="content">
          <Routes>
            <Route
              path='/'
              element={
                <Dashboard></Dashboard>
              } />
            <Route
              path='/dashboard'
              element={
                <Dashboard></Dashboard>
              } />
            <Route
              path='/product'
              element={
                <Product></Product>
              }
            />
            <Route
              path='/category'
              element={
                <Category></Category>
              }
            />
            <Route
              path='/loan'
              element={
                <Loan></Loan>
              }
            />
            <Route
              path='/worker'
              element={
                <Worker></Worker>
              }
            />
            <Route
              path='/report'
              element={
                <Report></Report>
              }
            />
          </Routes>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
