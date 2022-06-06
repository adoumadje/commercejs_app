import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Product = ({product}) => {
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price}
                </Typography>
            </div>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;