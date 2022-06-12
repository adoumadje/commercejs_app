import { Box, Button, CircularProgress, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { commerce } from '../../../libs/Commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { Link, useNavigate } from 'react-router-dom';

import { styles } from './styles';


const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const navigate = useNavigate();


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }


    const Form = () => activeStep === 0 ? 
        <AddressForm checkoutToken={checkoutToken} next={next} /> 
        : <PaymentForm 
            shippingData={shippingData} 
            checkoutToken={checkoutToken} 
            onCaptureCheckout={onCaptureCheckout}
            nextStep={nextStep} 
            backStep={backStep} 
            timeout={timeout}
            />;

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>
                    Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}
                </Typography>
                <Divider sx={styles.divider} />
                <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant='h5'>
                    Thank you for your purchase
                </Typography>
                <Divider sx={styles.divider} />
            </div>
            <br />
            <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
        </>
    ):(
        <Box sx={styles.spinner}>
            <CircularProgress />
        </Box>
    );


    if(error) {
        Confirmation = () => (
            <>
                <Typography>Error: {error}</Typography>
                <br />
                <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
            </>
        )
    }

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutToken(token);
            } catch (error) {
                navigate('/');
            }
        }

        generateToken();
    }, [cart]);


  return (
    <>
        <Box sx={styles.toolbar} />
        <CssBaseline />
        <Box sx={styles.layout}>
            <Paper sx={styles.paper}>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep} sx={styles.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </Box>
    </>
  )
}

export default Checkout;