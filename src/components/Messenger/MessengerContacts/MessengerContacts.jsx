import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { getContacts } from '../../../services/getUserLicenses'

function MessengerContacts() {
  // const licenseId = localStorage.getItem('licenseId')
  // const messengerType = localStorage.getItem('messengerType')
  // const token = localStorage.getItem('token')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return <div>MessengerContacts</div>
}

export default MessengerContacts
