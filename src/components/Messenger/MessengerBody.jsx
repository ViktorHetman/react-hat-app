import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Grid } from '@mui/material'

import { getLicenses } from '../../services/getUserLicenses'

import MessengerContacts from './MessengerContacts/MessengerContacts'
import MessengerHeader from './MessengerHeader/MessengerHeader'

import styles from './MessengerBody.module.css'

function MessengerBody() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getLicenses(token))
  }, [dispatch, token])

  return (
    <>
      {!!token && (
        <Grid container>
          <Grid item xs={3}>
            <MessengerContacts />
          </Grid>
          <Grid item xs={9}>
            <MessengerHeader />
            <Grid>
              <div className={styles.container}>MESSENGER CONTENT</div>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default MessengerBody
