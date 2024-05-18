import LoginForm from '@/components/FormComponents/LoginForm'
import ReusableHero from '@/components/reusableComp/ReusableHero'
import React from 'react'

const Login = () => {
  return (
    <div>
        <ReusableHero text='Login' />
      <LoginForm />
    </div>
  )
}

export default Login
