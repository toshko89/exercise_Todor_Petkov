import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import HomeCard from './HomeCard.js';

export default function Home({products, setProducts}) {
  return (
    <>
      <div className="row">
        <Grid container spacing={2}>
          {products.length > 0 && products.map((product) => <HomeCard key={product._id} product={product} />)}
          {products.length === 0 && <CircularProgress />}
          {products.length === 0 && <div>No results found</div>}
        </Grid>
      </div>
    </>
  )
}