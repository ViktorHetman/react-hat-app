import { convertTime } from '../../../utils/lastMessage'

import styles from './MessengerContactsCard.module.scss'

function MessengerContactCard({ name, image, tags, unread, lastMessage }) {
  const lastMessageTime = convertTime(lastMessage)

  return (
    <div className={styles.card}>
      <img src={image} alt="user avatar" />
      <div>
        <div className={styles.nameAndTime}>
          <span className={styles.name}>{name}</span>
          <span className={styles.time}>{lastMessageTime}</span>
        </div>
        <div className={`${unread ? styles.tagsAndUnread : styles.read}`}>
          <span className={styles.tags}>123</span>
          <div className={styles.unreadBlock}>
            <span className={`${unread ? styles.unread : styles.read}`}>
              {unread}
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
