import { Box, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { commerce } from '../../../libs/Commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

import { styles } from './styles';


const steps = ['Shipping address', 'Payment details'];

const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }



    const Form = () => activeStep === 0 ? 
        <AddressForm checkoutToken={checkoutToken} next={next} /> 
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} />;

    const Confirmation = () => (<div>Confirmation</div>);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutToken(token);
            } catch (error) {

            }
        }

        generateToken();
    }, [cart]);


  return (
    <>
        <Box sx={styles.toolbar} />
        <main>
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
        </main>
    </>
  )
}

export default Checkout;