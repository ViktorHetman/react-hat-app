import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'

import { getLicenses } from '../../services/getUserLicenses'

import MessengerContacts from './MessengerContacts/MessengerContacts'
import MessengerHeader from './MessengerHeader/MessengerHeader'

function MessengerBody() {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  // const handleClick = () => {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('refresh')
  //   navigate('/login')
  // }

  useEffect(() => {
    dispatch(getLicenses(token))
  }, [dispatch, token])

  return (
    <>
      {!!token && (
        <Grid container spacing={1}>
          <Grid style={{ marginTop: 10, marginLeft: 5 }} item xs={3}>
            <MessengerContacts />
          </Grid>
          <Grid item xs={4}>
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
