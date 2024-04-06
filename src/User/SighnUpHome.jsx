import React from 'react'
import { Link } from 'react-router-dom'
import './SighnUpHome.css'
import { Button, Card, CardContent, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import StorefrontIcon from '@mui/icons-material/Storefront'

const SignUp = () => {
  return (
    <div className='sign-up-container'>
      <Card className='sign-up-card'>
        <CardContent>
          <AccountCircleIcon
            className='icon'
            sx={{ fontWeight: 'bold' }}
            fontSize='bold'
          />
          <Typography
            variant='h5'
            sx={{ fontWeight: 'bold' }}
            className='txtxolor'
          >
            Individual{' '}
          </Typography>
        </CardContent>
        <Typography variant='caption' className='info'>
          For personal use(Regular courier serveice).
        </Typography>
        <Link to='/SighnUpHome/SignUpIndividual'>
          <Button
            variant='contained'
            className='sign-up-button'
            style={{ backgroundColor: '#fdfdfd', color: '#2e6117' }}
          >
            Sign Up
          </Button>
        </Link>
      </Card>
      <Card className='sign-up-card'>
        <CardContent>
          <StorefrontIcon
            className='icon'
            sx={{ fontWeight: 'bold' }}
            fontSize='bold'
            style={{ color: '#2e6117' }}
          />
          <Typography
            variant='h5'
            sx={{ fontWeight: 'bold' }}
            style={{ color: '#2e6117' }}
          >
            Business{' '}
          </Typography>
        </CardContent>
        <Typography variant='caption' className='info'>
          For business use.
        </Typography>
        <Link to='/SighnUpHome/SignUpBusiness'>
          <Button
            variant='contained'
            className='sign-up-button'
            style={{ backgroundColor: '#2e6117', color: '#fff' }}
          >
            Sign Up
          </Button>
        </Link>
      </Card>
    </div>
  )
}

export default SignUp
