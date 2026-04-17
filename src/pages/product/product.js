import React from 'react';
import './product.css';
import DataTable from '../../components/DataTable/DataTable';
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import FormEdit from '../../components/FormEdit/FormEdit'

import { Box, Avatar } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import supabase from '../../supabaseClient';
import { useEffect, useState } from 'react'


const addProduct = async (data) => {
  try {
    const { error } = await supabase
      .from("tb_product")
      .insert([
        {
          pro_code: data.code,
          pro_name: data.name,
          cate_id: data.category,
          pro_departement: data.departement, // fix spelling if possible
          pro_price: Number(data.price),
          pro_qty: Number(data.qty),
        },
      ]);

    if (error) {
      console.error("Insert error:", error.message);
      return;
    }

    console.log("Product added successfully ✅");
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};

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
  { field: 'code', headerName: 'Code', flex: 1 },

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
// const handleClick = () => {
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <FormEdit onSubmit={onSubmit}>
//       {({ register, errors }) => (
//         <>
//           <input {...register("name")} placeholder="Name" />

//           <input {...register("email")} placeholder="Email" />

//           {errors.name && <p>Name is required</p>}
//         </>
//       )}
//     </FormEdit>
//   );
// }

const Product = () => {
  const [open, setOpen] = useState(false);

  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('tb_product')
      .select('*, tb_category(cate_name)')

    if (error) {
      console.error(error)
    } else {
      const mapped = data.map(item => ({
        id: item.pro_id,
        // product:     item.pro_name,
        code: item.pro_code,
        name: item.pro_name,
        category: item.tb_category?.cate_name,
        departement: item.pro_departement,
        price: item.pro_price,
        qty: item.pro_qty,
        image: 'https://via.placeholder.com/40',
      }))
      setRows(mapped)
    }
    setLoading(false)
  }

  // const columns = [
  //   { field: 'image',       headerName: 'Image' },
  //   { field: 'product',     headerName: 'Product' },
  //   { field: 'name',        headerName: 'Name' },
  //   { field: 'category',    headerName: 'Category' },
  //   { field: 'departement', headerName: 'Department' },
  //   { field: 'price',       headerName: 'Price' },
  //   { field: 'qty',         headerName: 'Qty' },
  // ]

  return (
    <div className='container-fluid'>
      <h5 style={{ alignSelf: 'flex-start' }}>Product list</h5>
      <div className='filter'>
        <Button onClick={() => setOpen(true)} value={'Add New'} />
        <Input leftIcon={<i className="fa-solid fa-magnifying-glass"></i>} />
      </div>



      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable rows={rows} columns={columns} />
      )}

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FormEdit
              onSubmit={(data) => {
                addProduct(data);
                setOpen(false);
              }}
            >
              {({ register }) => (
                <>
                  <input {...register("code")} placeholder="Code" />
                  <input {...register("name")} placeholder="Name" />
                  <input {...register("category")} placeholder="Category" />
                  <input {...register("departement")} placeholder="Departement" />
                  <input {...register("price")} placeholder="Price" />
                  <input {...register("qty")} placeholder="qty" />

                </>
              )}
            </FormEdit>
          </div>

        </div>
      )}
    </div>
  )
}

export default Product