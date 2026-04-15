import React from 'react';

import DataTable from '../../components/DataTable/DataTable';
import Button from '../../components/Form/Button';
import '../../components/Form/Form.css';
import './category.css'


import { Box } from '@mui/material';
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
    name: 'Beauty',
  },
  {
    id: 2,
    name: 'Grocery',
  },
];

const columns = [

  // { field: 'code', headerName: 'Code', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },

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
    <div className='containe-fluid'>
      <h5 style={{ alignSelf: 'flex-start' }}>Category list</h5>
      <div className='filter'>
        <Button value={'Add New'}></Button>
        <div className='box-search'>
          <label style={{ padding: '0 10px' }}>Search</label>
          <input className='input' type='text'></input>
        </div>
      </div>
      <DataTable rows={rows} columns={columns}></DataTable>
    </div>
  );
};

export default Product;