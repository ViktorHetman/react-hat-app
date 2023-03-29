import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Main() {
  const navigate = useNavigate()

  const error = useSelector((state) => state.login.error)

  const handleClick = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <>
      {error === null ? (
        <h1>Hi!</h1>
      ) : (
        <button onClick={handleClick}>Return to Login</button>
      )}
    </>
  )
}

export default Main
