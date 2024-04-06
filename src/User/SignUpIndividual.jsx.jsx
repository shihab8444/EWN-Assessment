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

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const handleClickShowPassword2 = () => setShowPassword2((show2) => !show2)
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault()
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const handleNext = () => {
    handleSubmit((data) => {
      // If there are no errors, proceed to the next stage
      setStage(2)
      setIsChecked(true)
    })()
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
                  <TextField
                    label='Website or Social Meadia URL*'
                    variant='outlined'
                    fullWidth
                    {...register('URL', {
                      required: 'URL is required',
                    })}
                    error={Boolean(errors.URL)}
                    helperText={errors.URL?.message}
                  />

                  <TextField
                    label='District/State*'
                    variant='outlined'
                    fullWidth
                    {...register('State', {
                      required: 'District/State Name is required',
                    })}
                    error={Boolean(errors.State)}
                    helperText={errors.State?.message}
                  />
                  <TextField
                    label='City/Town*'
                    variant='outlined'
                    fullWidth
                    {...register('City', {
                      required: 'City/Town Name is required',
                    })}
                    error={Boolean(errors.City)}
                    helperText={errors.City?.message}
                  />
                  <TextField
                    label='Postcode/Zipcode*'
                    variant='outlined'
                    fullWidth
                    {...register('Zipcode', {
                      required: 'Postcode/Zipcode is required',
                    })}
                    error={Boolean(errors.Zipcode)}
                    helperText={errors.Zipcode?.message}
                  />
                  <TextField
                    label='Adress*'
                    variant='outlined'
                    fullWidth
                    {...register('Adress', {
                      required: 'Adress is required',
                    })}
                    error={Boolean(errors.Adress)}
                    helperText={errors.Adress?.message}
                  />
                </>
              )}
              {stage === 2 && (
                <>
                  <TextField
                    label='First Name*'
                    variant='outlined'
                    fullWidth
                    {...register('firstName', {
                      required: 'First Name is required',
                    })}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                  />
                  <TextField
                    label='Last Name*'
                    variant='outlined'
                    fullWidth
                    {...register('LastName', {
                      required: 'Last Name is required',
                    })}
                    error={Boolean(errors.LastName)}
                    helperText={errors.LastName?.message}
                  />
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      label='Phone Number*'
                      variant='outlined'
                      fullWidth
                      style={{ flex: 1 }}
                      {...register('Number', {
                        required: 'Phone Number is required',
                      })}
                      error={Boolean(errors.Number)}
                      helperText={errors.Number?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <TextField
                              select
                              value={countryCode}
                              onChange={(e) => setCountryCode(e.target.value)}
                              variant='outlined'
                              size='small'
                            >
                              {/* country code */}
                              <MenuItem value='+880'>+880</MenuItem>
                              <MenuItem value='+1'>+1</MenuItem>
                            </TextField>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <TextField
                    label='Email*'
                    variant='outlined'
                    fullWidth
                    {...register('Email', {
                      required: 'Email  is required',
                    })}
                    error={Boolean(errors.Email)}
                    helperText={errors.Email?.message}
                  />
                  <TextField
                    label='Role*'
                    variant='outlined'
                    select
                    fullWidth
                    error={Boolean(errors.role)}
                    helperText={errors.role?.message}
                  >
                    {Role.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='National ID Number*'
                    variant='outlined'
                    fullWidth
                    {...register('NID', {
                      required: 'National ID Number is required',
                    })}
                    error={Boolean(errors.NID)}
                    helperText={errors.NID?.message}
                  />
                  <TextField
                    label='Password*'
                    variant='outlined'
                    fullWidth
                    type={showPassword ? 'text' : 'password'} // Toggle password visibility
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label='Confirm Password*'
                    variant='outlined'
                    fullWidth
                    type={showPassword2 ? 'text' : 'password'} // Toggle password visibility
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword2}
                            edge='end'
                          >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className='options'>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: '#2e6117', // Green color
                            '&.Mui-checked': {
                              color: '#2e6117', // Green color when checked
                            },
                          }}
                        />
                      }
                      label='I Agree with DAK express'
                    />
                    <Link to='#' className='Terms-Condition'>
                      Terms and Condition
                    </Link>
                  </div>
                </>
              )}
            </div>

            <div className='buttons'>
              {stage === 1 && (
                <>
                  <Button
                    onClick={handleBack}
                    variant='contained'
                    type='submit'
                    fullWidth
                    className='signup-in-button'
                    sx={{ mr: 2 }}
                    style={{
                      backgroundColor: '#fbfffe',
                      color: '#2e6117',
                      mr: 5,
                      padding: '10px',
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                    className='signup-in-button'
                    onClick={handleNext}
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
              {stage === 2 && (
                <React.Fragment>
                  <Button
                    onClick={handleBack}
                    variant='contained'
                    type='submit'
                    fullWidth
                    sx={{ mr: 2 }}
                    className='signup-in-button'
                    style={{
                      backgroundColor: '#f4f9f8',
                      color: '#2e6117',
                      padding: '10px',
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    type='submit'
                    variant='contained'
                    fullWidth
                    sx={{ mr: 4 }}
                    className='signup-in-button'
                    style={{
                      backgroundColor: '#4ca652',
                      color: '#fff',
                      padding: '10px',
                    }}
                  >
                    Submit
                  </Button>
                </React.Fragment>
              )}
            </div>
          </form>
          <div style={{ marginTop: '25px' }}>
            <Typography
              variant='h7'
              sx={{ fontWeight: 'bold', marginLeft: '40%' }}
            >
              Already Have Account?{' '}
              <Link to='/' className='sign-in'>
                {' '}
                Sign In
              </Link>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpIndividual
