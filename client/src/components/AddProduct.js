import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { newProduct } from '../services/productService.js';

export default function AddProduct({ products, setProducts }) {
  const [product, setProduct] = useState({ name: '', price: '', image: '' });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitNewProduct = async () => {
    if (product.name.trim() === '' || product.price.trim() === '' || product.image.trim() === '') {
      setError('All fields are required');
      return;
    }

    try {
      const res = await newProduct(product);
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
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
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
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            onBlur={() => setError(false)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitNewProduct}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}