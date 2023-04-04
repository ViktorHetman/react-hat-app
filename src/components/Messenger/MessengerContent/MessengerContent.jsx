import { useSelector } from 'react-redux'

import styles from './MessengerContent.module.css'

function MessengerContent() {
  const messages = useSelector((state) => state.messages.allMesseges)
  const sortedMessages = messages.slice().reverse()

  return (
    <div className={styles.container}>
      <div>
        {sortedMessages?.map((item) => (
          <div
            className={`${
              item.fromMe === true ? styles.from_me : styles.from_contact
            }`}
            key={item.id}
          >
            <span
              className={`${
                item.fromMe === true ? styles.text_me : styles.text_contact
              }`}
            >
              {item.message.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessengerContent
