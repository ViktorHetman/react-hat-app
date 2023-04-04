import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { getContacts } from '../../../services/getUserLicenses'
import { getMessagesHistory } from '../../../services/getMessagesHistory'

import MessengerContactCard from '../MessengerContactCard/MessengerContactCard'

import styles from './MessengerContacts.module.css'
import { setName } from '../../../store/slices/contactsSlice'

function MessengerContacts() {
  const [active, setActive] = useState('false')
  const [filter, setFilter] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh')
    localStorage.removeItem('licenseId')
    localStorage.removeItem('messengerType')
    localStorage.removeItem('persist:root')
    navigate('/login')
  }
  const allContactsLocal = localStorage.getItem('persist:root')
  const allContactsJSON = JSON.parse(allContactsLocal)
  const allContacts = JSON.parse(allContactsJSON.userContacts)

  const setAllContacts = () => {
    setActive(true)
  }

  const setRecentContacts = () => {
    setActive(false)
  }

  const userInfoHandler = (id, name, phone) => {
    dispatch(getMessagesHistory(id))
    dispatch(
      setName({
        userName: name,
        userPhone: phone,
      })
    )
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.search_icon}>
          <SearchIcon />
        </div>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Search contact"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
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
      <hr />
      <div className={styles.container_list}>
        {active &&
          allContacts?.items
            ?.filter((item) => item.name.toLowerCase().includes(filter))
            .map((item) => (
              <div
                className={styles.contacts}
                key={item.id}
                onClick={() => userInfoHandler(item.id, item.name, item.phone)}
              >
                <MessengerContactCard name={item.name} phone={item.phone} />
                <hr />
              </div>
            ))}
      </div>
    </div>
  )
}
export default MessengerContacts
