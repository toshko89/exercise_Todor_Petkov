import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddProduct from './AddProduct.js'
import { useSelector } from 'react-redux';
import Deal from './Deal.js';
import { Link } from "react-router-dom";

export default function Header({ products, setProducts }) {
  // const pages = ['Products', 'Orders'];
  const orders = useSelector(state => state.cart.orders);
  const itemsInCart = orders.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Groceries Shop
            </Typography>
          </Link>
          <AddProduct products={products} setProducts={setProducts} />
          <Deal />
          {/* {pages.map((page) => (
            <MenuItem key={page} >
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))} */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Link to="/cart" style={{ color: 'inherit' }}>
                <Badge badgeContent={itemsInCart} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}