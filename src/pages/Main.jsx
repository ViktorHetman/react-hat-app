import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getLicenses } from '../services/getUserLicenses'

function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.licenses.licenses)
  //const token = localStorage.getItem('token')

  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const getData = () => {
    dispatch(getLicenses())
    console.log(data)
  }

  return (
    <>
      <h1>Hi!</h1>
      <button onClick={handleClick}>Return to Login</button>
      <button onClick={getData}> Get Data!</button>
    </>
  )
}

export default Main
