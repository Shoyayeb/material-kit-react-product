import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import {
  Box,
  Button,
  IconButton,
  TextField
} from '@mui/material';
import Send from '@mui/icons-material/Send';

const handleSubmit = (e) => {
  e.preventDefault();
}
const handleChange = (e) => {
  console.log(e);

}
const Customers = () => (
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
        sx={{ mx: 50 }}
        variant="contained"
      >Contained</Button>
    </form>
  </>
);
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
