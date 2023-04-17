import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import MessengerContactCard from '../MessengerContactCard/MessengerContactCard'

import { getMessagesHistory } from '../../../services/getMessagesHistory'
import { getContacts } from '../../../services/getUserLicenses'
import { getRecentContacts } from '../../../services/getRecentContacts'
import { patchMessage } from '../../../services/patchMessage'

import { setName } from '../../../store/slices/contactsSlice'
import { setInfo } from '../../../store/slices/sendMessageSlice'
import { setOpen } from '../../../store/slices/recentContacsSlice'

import styles from './MessengerContacts.module.scss'

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

  let allContacts = useSelector((state) => state.persisted.userContacts)
  if (!allContacts) {
    const allContactsLocal = localStorage.getItem('persist:root')
    const allContactsJSON = JSON.parse(allContactsLocal)
    allContacts = JSON.parse(allContactsJSON?.userContacts)
  }

  let recentContacts = useSelector(
    (state) => state.persistedRecent.recentContacts
  )
  if (!recentContacts) {
    const recentContactsLocal = localStorage.getItem('persist:allContacts')
    const allContactsJSON = JSON.parse(recentContactsLocal)
    recentContacts = JSON.parse(allContactsJSON?.recentContacts)
  }

  const setAllContacts = () => {
    setActive(true)
  }

  const setRecentContacts = () => {
    setActive(false)
    dispatch(getRecentContacts())
  }

  const userInfoHandler = (id, name, phone) => {
    dispatch(
      setInfo({
        chatId: id,
      })
    )
    dispatch(getMessagesHistory(id))
    dispatch(
      setName({
        userName: name,
        userPhone: phone,
      })
    )
  }

  const toggleOpenChatHandler = (id) => {
    dispatch(
      setOpen({
        isOpen: true,
        id: id,
        unreadMessages: 0,
      })
    )
    patchMessage(id)
  }

  const lastMessage = useSelector((state) => state.messages.allMesseges[0])

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
        {active
          ? allContacts?.items
              ?.filter((item) => item.name.toLowerCase().includes(filter))
              .map((item) => (
                <div
                  className={styles.contacts}
                  key={item.id}
                  onClick={() =>
                    userInfoHandler(item.id, item.name, item.phone)
                  }
                >
                  <MessengerContactCard name={item.name} phone={item.phone} />
                  <hr />
                </div>
              ))
          : recentContacts?.items
              ?.filter((item) => item.name.toLowerCase().includes(filter))
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    userInfoHandler(item.id, item.name, item.image)
                  }
                >
                  <MessengerContactCard
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    tags={item.tags}
                    lastMessageUNIX={item.timeLastInMessage}
                    unread={item.unreadMessages}
                    toggleOpenChatHandler={toggleOpenChatHandler}
                    lastMessage={lastMessage}
                    isOpen={item.isOpen}
                    isClosed={item.isClosed}
                  />
                </div>
              ))}
      </div>
    </div>
  )
}
export default MessengerContacts
