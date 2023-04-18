import { Rating } from '@mui/material'
import { useState } from 'react'

import { convertTime } from '../../../utils/lastMessage'

import styles from './MessengerContactsCard.module.scss'

function MessengerContactCard({
  id,
  name,
  image,
  tags,
  unread,
  lastMessageUNIX,
  toggleOpenChatHandler,
  isOpen,
  lastMessage,
  isClose,
}) {
  const [rating, setRaiting] = useState(0)
  const lastMessageTime = convertTime(lastMessageUNIX)
  return (
    <div
      className={`${styles.cardContainer} ${isOpen ? styles.openedChat : ''}`}
      onClick={() => toggleOpenChatHandler(id)}
    >
      <img
        src={`${
          image
            ? image
            : 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png'
        }`}
        alt="user avatar"
      />
      <div className={styles.card}>
        <div className={styles.nameAndTime}>
          <span className={styles.name}>{name}</span>
          <span className={styles.time}>{lastMessageTime}</span>
        </div>
        <div
          className={`${
            !isOpen && unread ? styles.tagsAndUnread : styles.read
          }`}
        >
          <div className={styles.tags}>
            {tags?.map((tag) => (
              <div key={tag.id} style={{ backgroundColor: tag.color }}>
                <span>{tag.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.unreadBlock}>
            <span className={styles.unread}>
              {unread && !isOpen ? unread : ''}
            </span>
          </div>
        </div>
        <div>
          <span className={`${unread ? styles.unreadMessage : ''}`}>{`${
            isClose
              ? `Chat is closed | ${(
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(newValue) => setRaiting(newValue)}
                  />
                )}`
              : 'There should be last message'
          }`}</span>
        </div>
      </div>
    </div>
  )
}

export default MessengerContactCard
//
