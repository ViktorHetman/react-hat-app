import { convertTime } from '../../../utils/lastMessage'

import styles from './MessengerContactsCard.module.scss'

function MessengerContactCard({
  id,
  name,
  image,
  tags,
  unread,
  lastMessage,
  toggleOpenChatHandler,
  isOpen,
}) {
  const lastMessageTime = convertTime(lastMessage)

  return (
    <div
      className={`${styles.cardContainer} ${isOpen ? styles.openedChat : ''}`}
      onClick={() => toggleOpenChatHandler(id)}
    >
      <img src={image} alt="user avatar" />
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
          <span className={styles.tags}>123</span>
          <div className={styles.unreadBlock}>
            <span className={styles.unread}>
              {unread && !isOpen ? unread : ''}
            </span>
          </div>
        </div>
        <div>
          <span>222</span>
        </div>
      </div>
    </div>
  )
}

export default MessengerContactCard
//
