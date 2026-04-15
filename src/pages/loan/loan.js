import React from 'react';
import DataTable from '../../components/DataTable/DataTable';
import Button from '../../components/Form/Button';

import './loan.css'

import { Box, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';

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
    name: 'Time',
    category: 'Beauty',
    qty: 10,
    taken_by: 'Rith',
  },
  {
    id: 2,
    product: 'Cream',
    name: 'PC',
    category: 'Beauty',
    qty: 10,
    taken_by: 'Rith',
  },

];

const columns = [
  {
    field: 'product',
    headerName: 'Product',
    flex: 1,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src={params.row.image} />
        {params.value}
      </Box>
    ),
  },
  // { field: 'code', headerName: 'Code', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1.5 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'qty', headerName: 'Quantity', flex: 1 },
  { field: 'taken_by', headerName: 'Taken by', flex: 1 },
  { field: 'taken_date', headerName: 'Taken', flex: 1 },
  { field: 'return_date', headerName: 'Return', flex: 1 },


  {
    field: 'action',
    headerName: 'Action',
    flex: 1.2,
    sortable: false,
    renderCell: () => (
      <Box display="flex" gap={1}>
        {/* <VisibilityIcon style={{ color: '#29b6f6', cursor: 'pointer' }} /> */}
        <UndoIcon style={{ color: '#29b6f6', cursor: 'pointer' }} />
        <EditIcon style={{ color: '#66bb6a', cursor: 'pointer' }} />
        <DeleteIcon style={{ color: '#ef5350', cursor: 'pointer' }} />
      </Box>
    ),
  },
];
const Loan = () => {
  return (
    <div className='container-fluid'>
      <h5 style={{ alignSelf: 'flex-start' }}>Loan list</h5>
      <div className='filter'>
        <Button value={'New Loan'}></Button>
        <div className='box-search'>
          <label style={{ padding: '0 10px' }}>Search</label>
          <input className='input' type='text'></input>
        </div>
      </div>
      <DataTable rows={rows} columns={columns}></DataTable>
    </div>
  );
};

export default Loan;