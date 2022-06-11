import { AppBar, Badge, IconButton, Toolbar, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import logo from "../../assets/commerce.png";
import { styles } from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const location = useLocation();

  return (
    <>
        <AppBar sx={styles.appBar} position='fixed' color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" sx={styles.title} variant='h6' color='inherit'>
                    <img src={logo} alt="Commerce.js" height="25px" sx={styles.image} />
                    Commerce.js
                </Typography>
                <Box sx={styles.grow} />
                {location.pathname === "/" && (
                    <Box>
                        <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar;