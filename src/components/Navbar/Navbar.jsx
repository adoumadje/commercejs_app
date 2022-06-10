import { AppBar, Badge, IconButton, Toolbar, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import logo from "../../assets/commerce.png";
import { styles } from './styles';

const Navbar = () => {
  return (
    <>
        <AppBar sx={styles.appBar} position='fixed' color='inherit'>
            <Toolbar>
                <Typography sx={styles.title} variant='h6' color='inherit'>
                    <img src={logo} alt="Commerce.js" height="25px" sx={styles.image} />
                    Commerce.js
                </Typography>
                <Box sx={styles.grow} />
                <Box>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar;