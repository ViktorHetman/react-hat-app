import React from 'eslint-plugin-import/config/react'
import styles from './MessengerContactsCard.module.css'

function MessengerContactCard({ name, phone }) {
  return (
    <div className={styles.card}>
      <span>{name}</span>
      <span>{`+${phone}`}</span>
    </div>
  )
}

export default MessengerContactCard
