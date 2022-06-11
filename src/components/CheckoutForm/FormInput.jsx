import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label}) => {
    const {control} = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
        <Controller 
            defaultValue=""
            as={TextField}
            control={control}
            fullWidth
            name={name}
            label={label}
            required
            render={
              ({field}) => (
                <TextField {...field} name={name} label={label} required fullWidth />
              )
            }
        />
    </Grid>
  )
}

export default FormInput;