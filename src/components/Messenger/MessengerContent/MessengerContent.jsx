import { useDispatch, useSelector } from 'react-redux'

import pusher from '../../../pusher/pusher'
import { setMessage } from '../../../store/slices/messegesSlice'

import styles from './MessengerContent.module.css'
import { useEffect } from 'react'

function MessengerContent() {
  const dispatch = useDispatch()

  const license = localStorage.getItem('licenseId')
  useEffect(() => {
    const channel = pusher.subscribe(
      `private-v1.licenses.${license}.messengers.grWhatsApp`
    )
    channel.bind('message', (data) => {
      dispatch(
        setMessage({
          allMesseges: data.payload.data,
        })
      )
    })
  }, [dispatch, license])

  const messages = useSelector((state) => state.messages.allMesseges)
  const sortedMessages = messages.slice().reverse()

  return (
    <div className={styles.container}>
      <div>
        {sortedMessages?.map((item) => (
          <div key={item.id}>
            {item.message.text ? (
              <div
                key={item.id}
                className={`${
                  item.fromMe === true ? styles.from_me : styles.from_contact
                }`}
              >
                <span
                  className={`${
                    item.fromMe === true ? styles.text_me : styles.text_contact
                  }`}
                >
                  {item.message.text}
                </span>
              </div>
            ) : (
              <div className={styles.chat_pic_from_contact}>
                <img
                  className={styles.chat_pic}
                  src={item.message.file.link}
                  alt="pic"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessengerContent
