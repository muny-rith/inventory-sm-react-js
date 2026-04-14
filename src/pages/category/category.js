import React from 'react';

import DataTable from '../../components/DataTable/DataTable';


import { Box, Avatar } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

const columns = [
  {
    field: 'product',
    headerName: 'Product',
    flex: 1.5,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src={params.row.image} />
        {params.value}
      </Box>
    ),
  },
  { field: 'code', headerName: 'Code', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'price', headerName: 'Price', flex: 1 },
  { field: 'brand', headerName: 'Brand', flex: 1 },
  { field: 'cost', headerName: 'Cost', flex: 1 },
  { field: 'qty', headerName: 'Quantity', flex: 1 },

  {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    sortable: false,
    renderCell: () => (
      <Box display="flex" gap={1}>
        <VisibilityIcon style={{ color: '#29b6f6', cursor: 'pointer' }} />
        <EditIcon style={{ color: '#66bb6a', cursor: 'pointer' }} />
        <DeleteIcon style={{ color: '#ef5350', cursor: 'pointer' }} />
      </Box>
    ),
  },
];

const Product = () => {
  return (
    <div className='product'>
      <h5 style={{ alignSelf: 'flex-start' }}>Product list</h5>
      <div className='filter'>
        <button className='input'>+ Add New</button>
        <div>
          <label style={{ padding: '0 10px' }}>Search</label>
          <input className='input' type='text'></input>
        </div>
      </div>
      <DataTable rows={rows} columns={columns}></DataTable>
    </div>
  );
};

export default Product;