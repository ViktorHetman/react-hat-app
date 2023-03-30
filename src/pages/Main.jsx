import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getLicenses } from '../services/getUserLicenses'

function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.login.token.accessToken)

  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    navigate('/login')
  }

  useEffect(() => {
    dispatch(getLicenses(token))
  }, [dispatch, token])

  return (
    <>
      <h1>Hi!</h1>
      <button onClick={handleClick}>Return to Login</button>
    </>
  )
}

export default Main
