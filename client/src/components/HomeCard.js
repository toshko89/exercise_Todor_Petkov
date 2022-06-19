import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart } from '../app/cart.js';
import { useDispatch } from 'react-redux';

export default function HomeCard({ product }) {
  
  const dispatch = useDispatch();

  function addToCartClick() {
    dispatch(addToCart(product));
  }

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={product.image}
          alt="person image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={addToCartClick}>
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}