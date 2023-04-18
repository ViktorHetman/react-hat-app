import { FormGroup, FormControlLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { patchCloseChat } from '../../../services/patchCloseChat'
import { setClosed } from '../../../store/slices/recentContacsSlice'

import IOSSwitch from '../../MUI Components/Switch'
import LongMenu from '../../MUI Components/BurgerBtn'

import styles from './MessengerHeader.module.scss'
import image from '../../../img/Arrow.png'

function MessengerHeader() {
  const [value, setValue] = useState(true)
  const dispatch = useDispatch()
  const name = useSelector((state) => state.persisted.userName)
  const licenseId = localStorage.getItem('licenseId')
  const recentContacts = useSelector(
    (state) => state.persistedRecent.recentContacts
  )
  const id = useSelector((state) => state.sendMessage.chatId)

  if (!value) {
    patchCloseChat(id)
    dispatch(
      setClosed({
        isClose: true,
        id: id,
      })
    )
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_profile}>
        <div>
          {recentContacts?.items.map((item) =>
            item.id === id ? (
              <img
                key={item.id}
                src={`${
                  item.image
                    ? item.image
                    : 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
                }`}
                alt="user avatar"
              />
            ) : (
              ''
            )
          )}
          <span className={styles.header_content}>{name}</span>
          <span className={styles.header_phone}>
            {licenseId ? `License:${licenseId}` : ''}
          </span>
          <img src={image} alt="arrow" className={styles.arrow} />
        </div>
      </div>
      <div>
        <FormGroup className={styles.switch}>
          <FormControlLabel
            className={`${
              value ? styles.switchLabelOpen : styles.switchLabelClose
            }`}
            control={
              <IOSSwitch
                checked={value}
                color="success"
                onChange={(e) => setValue(e.target.checked)}
              />
            }
            label={`${value ? 'Open' : 'Closed'}`}
          />
        </FormGroup>
      </div>
      <div className={styles.profileAvatar}>
        <img
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
          alt="avatar"
        />
      </div>
      <div className={styles.burgerBtn}>
        <LongMenu />
      </div>
    </div>
  )
}

export default MessengerHeader
