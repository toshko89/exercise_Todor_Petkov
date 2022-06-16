import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddProduct from './AddProduct.js'
import { useSelector } from 'react-redux';

export default function Header({ products, setProducts }) {
  const pages = ['Products', 'Orders'];
  const orders = useSelector(state => state.cart.orders);
  const itemsInCart = orders.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Groceries Shop
          </Typography>
          <AddProduct products={products} setProducts={setProducts} />
          {pages.map((page) => (
            <MenuItem key={page} >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={itemsInCart} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}