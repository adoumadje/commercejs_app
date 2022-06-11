import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart}) => {
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} sx={styles.media} />
        <CardContent sx={styles.cardContent}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
            <Box sx={styles.buttons}>
                <Button 
                    type='button' 
                    size='small' 
                    onClick={() => onUpdateCartQty(item.id, {quantity: item.quantity - 1})}
                >-</Button>
                <Typography>{item.quantity}</Typography>
                <Button 
                    type='button' 
                    size='small'
                    onClick={() => onUpdateCartQty(item.id, {quantity: item.quantity + 1})}
                >+</Button>
            </Box>
            <Button 
                variant='contained' 
                type='button' 
                color='secondary'
                onClick={() => onRemoveFromCart(item.id)}
            >
                Remove
            </Button>
        </CardActions>
    </Card>
  )
}

export default CartItem