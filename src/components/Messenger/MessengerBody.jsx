import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Grid } from '@mui/material'

import { getLicenses } from '../../services/getUserLicenses'

import MessengerContacts from './MessengerContacts/MessengerContacts'
import MessengerHeader from './MessengerHeader/MessengerHeader'
import MessengerContent from './MessengerContent/MessengerContent'
import MessengerInput from './MessengerInput/MessengerInput'

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
              <MessengerContent />
            </Grid>
            <Grid>
              <MessengerInput />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default MessengerBody
