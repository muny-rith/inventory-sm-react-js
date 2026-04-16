import React from 'react';
import './product.css';
import DataTable from '../../components/DataTable/DataTable';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'

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
    name: 'Phone',
    category: 'Beauty',
    departement: 'A1',
    price: 25,
    qty: 10,
    image: 'https://via.placeholder.com/40',
  },
  {
    id: 2,
    product: 'Rain Umbrella',
    name: 'computer',
    category: 'Grocery',
    departement: 'A2',
    price: 30,
    qty: 15,
    image: 'https://via.placeholder.com/40',
  },
];

const columns = [

  // { field: 'code', headerName: 'Code', flex: 1 },
  {
    field: 'product',
    headerName: 'Product',
    flex: 1.2,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src={params.row.image} />
        {params.value}
      </Box>
    ),
  },
  { field: 'name', headerName: 'Name', flex: 1.5 },

  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'departement', headerName: 'Departement', flex: 1.2 },
  { field: 'price', headerName: 'Price', flex: 1 },
  { field: 'qty', headerName: 'Quantity', flex: 1 },

  {
    field: 'action',
    headerName: 'Action',
    flex: 1.2,
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
    <div className='container-fluid'>
      <h5 style={{ alignSelf: 'flex-start' }}>Product list</h5>
      <div className='filter'>
        <Button value={'Add New'} ></Button>
        <Input leftIcon={<i class="fa-solid fa-magnifying-glass"></i>}></Input>
      </div>
      <DataTable rows={rows} columns={columns}></DataTable>
    </div>
  );
};

export default Product;