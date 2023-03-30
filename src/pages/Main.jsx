import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Main() {
  const navigate = useNavigate()
  const token = useSelector((state) => state.login.token)
  const { accessToken } = token

  const handleClick = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <>
      {!!accessToken ? (
        <h1>Hi!</h1>
      ) : (
        <button onClick={handleClick}>Return to Login</button>
      )}
    </>
  )
}

export default Main
