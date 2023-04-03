import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { getContacts } from '../../../services/getUserLicenses'
import { getMessagesHistory } from '../../../services/getMessagesHistory'

import styles from './MessengerContacts.module.css'

function MessengerContacts() {
  const [active, setActive] = useState('false')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    navigate('/login')
  }
  const allContactsLocal = localStorage.getItem('persist:root')
  const allContactsJSON = JSON.parse(allContactsLocal)
  const allContacts = JSON.parse(allContactsJSON.userContacts)
  console.log(allContacts)

  const setAllContacts = () => {
    setActive(true)
  }

  const setRecentContacts = () => {
    setActive(false)
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="searchbar"
        />
      </div>
      <div className={styles.contact_field}>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="outlined" onClick={setRecentContacts}>
          Recent
        </Button>
        <Button variant="outlined" onClick={setAllContacts}>
          All contacts
        </Button>
      </div>
      <div className={styles.container_list}>
        {active &&
          allContacts?.items?.map((item) => (
            <div
              className={styles.cuP}
              key={item.id}
              onClick={() => dispatch(getMessagesHistory(item.id))}
            >
              <label className={styles.contacts}>{item.name}</label>
              <hr />
            </div>
          ))}
      </div>
    </div>
  )
}

export default MessengerContacts
