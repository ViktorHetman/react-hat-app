import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

import { getContacts } from '../../../services/getUserLicenses'

import styles from './MessengerContacts.module.css'

function MessengerContacts() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <>
      <input type="text" placeholder="searchbar" />
      <div className={styles.contact_field}>
        <Button variant="outlined">Recent</Button>
        <Button variant="outlined">All contacts</Button>
      </div>
    </>
  )
}

export default MessengerContacts
