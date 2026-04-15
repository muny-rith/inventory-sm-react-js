import React from 'react';



// import { Box, Avatar } from '@mui/material';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';


import './report.css'
import LoanoutChart from '../../components/LoanoutChart/LoanoutChart';


// const rows = [
//   { id: 1, name: 'Product A', price: 25 },
//   { id: 2, name: 'Product B', price: 30 },
// ];

// const columns = [
//   { field: 'name', headerName: 'Product', flex: 1 },
//   { field: 'price', headerName: 'Price', flex: 1 },
// ];




const rows = [
  {
    id: 1,
    product: 'Organic Cream',
    code: 'CREM01',
    category: 'Beauty',
    price: 25,
    brand: 'Lakme',
    cost: 10,
    qty: 10,
    image: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    product: 'Rain Umbrella',
    code: 'UM01',
    category: 'Grocery',
    price: 30,
    brand: 'Sun',
    cost: 20,
    qty: 15,
    image: 'https://via.placeholder.com/40',
  },
];


const Report = () => {
  return (
    <div className='container-fluid'>

      <div className='container-1'>
        <div className='title'>
          <h5 style={{ alignSelf: 'flex-start' }}>Overview</h5>
        </div>
        <div className='container-overview'>
          <div className='card'>
            <div className='title'>Total Category</div>
            <div className='overview'>
              <LoanoutChart></LoanoutChart>
            </div>
          </div>
          <div className='card'>
            <div className='title'>Total Category</div>
            <div className='overview'>
              <LoanoutChart></LoanoutChart>
            </div>
          </div>
          <div className='card'>
            <div className='title'>Total Category</div>
            <div className='overview'>
              <LoanoutChart></LoanoutChart>
            </div>
          </div>
          <div className='card'>
            <div className='title'>Total Category</div>
            <div className='overview'>
              <LoanoutChart></LoanoutChart>
            </div>
          </div>

        </div>
      </div>

      <div className='container-2'>
        <div className='container-loanout card'>
          <div className='title'>
            <h5 style={{ alignSelf: 'flex-start' }}>Loan Stock</h5>
          </div>

          <div className='container-fluid'>
            <LoanoutChart></LoanoutChart>
          </div>
        </div>
        <div className='container-stock card'>
          <div className='title'>
            <h5 style={{ alignSelf: 'flex-start' }}>Stock by Category</h5>
          </div>
          <div className='container-fluid'>
            <LoanoutChart></LoanoutChart>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;