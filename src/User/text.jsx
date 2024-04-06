import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUpIndividual.css' // Import your CSS file for styling
import {
  Button,
  Card,
  Typography,
  CardContent,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material'

import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import { useForm } from 'react-hook-form'
import './SignUpBusiness.css'

const SignUpIndividual = () => {
  const [stage, setStage] = useState(1) // To keep track of the current stage
  const [isChecked, setIsChecked] = useState(false)
  const [countryCode, setCountryCode] = useState('+880')
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const handleNext = () => {
    // Trigger form validation for the current stage
    const isValid = Object.keys(errors).length === 0

    // If form is valid, proceed to the next stage
    if (isValid) {
      setStage(2)
      setIsChecked(true)
    }
  }

  const handleBack = () => setStage(1)

  const Role = [
    {
      value: 'Admin',
      label: 'Admin',
    },
    {
      value: 'Sr. Officer',
      label: 'Sr. Officer',
    },
    {
      value: 'Officer',
      label: 'Officer',
    },
    {
      value: 'Staff',
      label: 'Staff',
    },
  ]

  const steps = ['Business Info', 'Contact person Info']

  return (
    <div className='sign-up-individual-container'>
      <Card className='sign-up-individual-card'>
        <CardContent>
          <div className='txt' style={{ display: 'grid', marginLeft: '10%' }}>
            <Typography
              variant='h4'
              sx={{ fontWeight: 'bold', marginLeft: '22%' }}
            >
              Let's Get Started With
            </Typography>
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold', marginLeft: '40%' }}
            >
              Individual
            </Typography>
            <Typography
              variant='caption'
              sx={{
                fontWeight: 'bold',
                marginLeft: '30%',
                marginBottom: '10px',
              }}
            >
              Please provide the following Information
            </Typography>
          </div>

          <div>
            <Stepper activeStep={isChecked} alternativeLabel>
              {steps.map((label) => (
                <Step
                  key={label}
                  sx={{
                    '& .MuiStepLabel-root .Mui-completed': {
                      color: '#2e6117',
                    },
                  }}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-row'>
              {stage === 1 && (
                <>
                  <TextField
                    label='Buissness Name*'
                    variant='outlined'
                    fullWidth
                    {...register('Name', {
                      required: 'Buissness Name is required',
                    })}
                    error={Boolean(errors.Name)}
                    helperText={errors.Name?.message}
                  />
                  {/* Other fields... */}
                </>
              )}
              {stage === 2 && <>{/* Second stage fields... */}</>}
            </div>

            <div className='buttons'>
              {stage === 1 && (
                <>
                  <Button
                    onClick={handleBack}
                    variant='contained'
                    fullWidth
                    className='signup-in-button'
                    sx={{ mr: 2 }}
                    style={{
                      backgroundColor: '#fbfffe',
                      color: '#2e6117',
                      padding: '10px',
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    // onClick={handleNext}
                    variant='contained'
                    fullWidth
                    className='signup-in-button'
                    style={{
                      backgroundColor: '#4ca652',
                      color: '#fff',
                      padding: '10px',
                    }}
                  >
                    Next
                  </Button>
                </>
              )}
              {/* Other buttons... */}
            </div>
          </form>
          {/* Remaining code for the form */}
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpIndividual
