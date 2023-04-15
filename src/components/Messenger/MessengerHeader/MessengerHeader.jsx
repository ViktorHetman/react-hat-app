import { useSelector } from 'react-redux'

import styles from './MessengerHeader.module.css'

function MessengerHeader() {
  const name = useSelector((state) => state.persisted.userName)
  const licenseId = localStorage.getItem('licenseId')

  return (
    <div className={styles.header}>
      <span className={styles.header_content}>{name}</span>
      <span className={styles.header_phone}>
        {licenseId ? `License:${licenseId}` : ''}
      </span>
    </div>
  )
}

export default MessengerHeader
