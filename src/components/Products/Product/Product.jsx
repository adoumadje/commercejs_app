import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {styles} from "./styles";

const Product = ({product}) => {
  return (
    <Card sx={styles.root}>
        <CardMedia sx={styles.media} image={product.image.url} title={product.name} />
        <CardContent>
            <div sx={styles.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5'>
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color="textSecondary" />
            </div>
        </CardContent>
        <CardActions disableSpacing sx={styles.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCartIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;