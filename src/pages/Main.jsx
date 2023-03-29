import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()
  const localInfo = JSON.parse(localStorage.getItem('user'))
  const token = localInfo?.token.accessToken

  const handleClick = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  useEffect(() => {
    if (token === null) {
      navigate('/login')
    } else {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <>
      {!!token && <h1>Hi!</h1>}
      <button onClick={handleClick}>Return to Login</button>
    </>
  )
}

export default Main
