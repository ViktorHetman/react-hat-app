import { useSelector } from 'react-redux'

import styles from './MessengerHeader.module.scss'
import image from '../../../img/Arrow.png'

function MessengerHeader() {
  const name = useSelector((state) => state.persisted.userName)
  const licenseId = localStorage.getItem('licenseId')
  const recentContacts = useSelector(
    (state) => state.persistedRecent.recentContacts
  )
  const id = useSelector((state) => state.sendMessage.chatId)

  return (
    <div className={styles.header}>
      <div className={styles.header_profile}>
        <div>
          {recentContacts?.items.map((item) =>
            item.id === id ? <img src={item.image} alt="user avatar" /> : ''
          )}
          <span className={styles.header_content}>{name}</span>
          <span className={styles.header_phone}>
            {licenseId ? `License:${licenseId}` : ''}
          </span>
          <img src={image} alt="arrow" className={styles.arrow} />
        </div>
      </div>
    </div>
  )
}

export default MessengerHeader
