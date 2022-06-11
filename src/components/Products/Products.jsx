import React from 'react';
import { Grid, Box } from '@mui/material';

import Product from './Product/Product';
import { styles } from './styles';



const Products = ({products, onAddToCart }) => {
  return (
    <main>
        <Box sx={styles.content}>
            <Box sx={theme => theme.mixins.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    </main>
  )
}

export default Products;