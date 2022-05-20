import Head from 'next/head';
import { useState } from 'react';
import {
  Box,
  Button,
  TextField
} from '@mui/material';


const Customers = () => {
  const [productData, setProductData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api', productData)
  }
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const data = { ...productData };
    data[field] = value;
    setProductData(data);
    console.log('changing');

  }
  return (
    <>
      <Head>
        <title>
          Add products | Material Kit
        </title>
      </Head>
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 3, mx: 30 }}>

          <TextField
            fullWidth
            label="Product Name"
            margin="normal"
            name="name"
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            fullWidth
            multiline
            label="Product Description"
            margin="normal"
            name="description"
            onChange={handleChange}
            variant="outlined"
          />

          <TextField
            fullWidth
            type="number"
            label="Product Price"
            margin="normal"
            name="price"
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Button
          type="submit"
          sx={{ mx: 50 }}
          variant="contained"
        >Contained</Button>
      </form>
    </>
  );
}
export default Customers;
