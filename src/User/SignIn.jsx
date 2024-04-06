import { React, useState } from 'react'
import './SignIn.css' // Import your CSS file for styling
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import CircularProgress from '@mui/material/CircularProgress'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const onSubmit = (data) => {
    setLoading(true) // Start loading animation

    // Simulate a delay before setting isLoading to false
    setTimeout(() => {
      setLoading(false) // Stop loading animation after a delay
    }, 2000)
  }

  return (
    <div className='sign-in-card'>
      <h2>Sign In</h2>
      <p> Fill in the fields below to sign in into your account </p>
      <form className='sign-in-form' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label='E-mail*'
          variant='outlined'
          fullWidth
          className='Email'
          {...register('email', {
            required: 'E-mail Address is required.',
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          label='Password*'
          variant='outlined'
          fullWidth
          type={showPassword ? 'text' : 'password'} // Toggle password visibility
          {...register('password', { required: 'Password is required' })}
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
            label='Remember me'
          />
          <Link to='#' className='forgot-password'>
            Forgot password?
          </Link>
        </div>
        <Button
          type='submit'
          variant='contained'
          fullWidth
          className='sign-in-button'
          disabled={loading} // Disable button when loading
          style={{ backgroundColor: '#2e6117', color: '#fff' }}
        >
          {loading ? (
            <>
              {' '}
              <span style={{ marginLeft: 8 }}>Signing In....</span>
              <CircularProgress
                color='inherit'
                size={24}
                style={{ backgroundColor: '#2e6117', color: '#fff' }}
              />
            </>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>
      <div className='signup'>
        {' '}
        Don't have account?
        <Link to='/SighnUpHome' className='forgot-password'>
          Create An Account
        </Link>
      </div>
    </div>
  )
}

export default SignIn
