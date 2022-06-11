import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CartItem from './CartItem/CartItem';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

import { styles } from './styles';

const Cart = ({cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  
  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items in your shopping cart, 
      <Link component={RouterLink} to="/" sx={styles.link}> start adding some!</Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem 
                      item={item} 
                      onUpdateCartQty={onUpdateCartQty}
                      onRemoveFromCart={onRemoveFromCart}
                    />
                </Grid>
            ))}
        </Grid>
        <Box sx={styles.cardDetails}>
            <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button 
                  size='large' 
                  type='button' 
                  variant='contained' 
                  color='secondary' sx={styles.emptyButton}
                  onClick={onEmptyCart}
                >
                  Empty cart
                </Button>
                <Button 
                  size='large' 
                  type='button' 
                  variant='contained' 
                  color='primary' sx={styles.checkoutButton}
                  component={RouterLink} to="/checkout"
                >
                  Checkout
                </Button>
            </div>
        </Box>
    </>
  );

  if(!cart.line_items) return 'Loading';

  return (
    <Container>
        <Box sx={styles.toolbar}/>
        <Typography variant='h3' sx={styles.title} gutterBottom>Your Shopping Cart</Typography>
        { cart.line_items.length ? <FilledCart /> : <EmptyCart /> }
    </Container>
  )
}

export default Cart;