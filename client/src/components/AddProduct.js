import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { newProduct as newProductService } from '../services/productService.js';
import DealSelect from './DealSelect.js';

export default function AddProduct({ products, setProducts }) {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const [deal, setDeal] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitNewProduct = async () => {
    if (newProduct.name.trim() === '' || newProduct.price.trim() === '' || newProduct.image.trim() === '') {
      setError('All fields are required');
      return;
    }

    if (deal.trim() === '') {
      setError('Please select a deal');
      return;
    }

    try {
      const productToAdd = { ...newProduct, deal };
      const res = await newProductService(productToAdd);
      if (res.errors) {
        setError(res.message);
        return;
      }
      setProducts([...products, res]);
      handleClose();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  return (
    <div>
      <Button variant="text" color="inherit" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the product details.
          </DialogContentText>
          {error && <Typography color="red" size={20}>{error}</Typography>}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            onBlur={() => setError(false)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="price"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            onBlur={() => setError(false)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="image"
            label="image URL"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            onBlur={() => setError(false)}
          />
          <DealSelect deal={deal} setDeal={setDeal} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitNewProduct}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}