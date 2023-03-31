import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MessengerContacts from './MessengerContacts/MessengerContacts'

import { getLicenses } from '../../services/getUserLicenses'

import styles from '../../styles/LogOutBtn.module.css'

function MessengerBody() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

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
      <button className={styles.logutBtn} onClick={handleClick}>
        Log out!
      </button>
      {!!token && (
        <>
          <h1>Hi!</h1>
          <MessengerContacts />
        </>
      )}
    </>
  )
}

export default MessengerBody
