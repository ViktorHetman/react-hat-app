import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Grid } from '@mui/material'

import { getLicenses } from '../../services/getUserLicenses'

import MessengerContacts from './MessengerContacts/MessengerContacts'
import MessengerHeader from './MessengerHeader/MessengerHeader'

function MessengerBody() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getLicenses(token))
    if (!token) {
    }
  }, [dispatch, token])

  return (
    <>
      {!!token && (
        <Grid container spacing={1}>
          <Grid style={{ marginTop: 10, marginLeft: 5 }} item xs={3}>
            <MessengerContacts />
          </Grid>
          <Grid item xs={8}>
            <MessengerHeader />
            <Grid>
              <div>MESSENGER CONTENT</div>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default MessengerBody
