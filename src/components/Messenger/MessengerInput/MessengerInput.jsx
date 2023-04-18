import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch, useSelector } from 'react-redux'

import { postMessage } from '../../../services/postMessage'

import plus from '../../../img/plus.png'
import microphone from '../../../img/Micro.png'
import emoji from '../../../img/smile.png'

import styles from './MessengerInput.module.scss'

function MessengerInput() {
  const dispatch = useDispatch()
  const chatId = useSelector((state) => state.sendMessage.chatId)
  const [message, setMessage] = useState('')

  const onSubmitHandler = () => {
    localStorage.setItem('text', message)
    dispatch(postMessage(chatId))
    setMessage('')
  }

  return (
    <div className={styles.text_field}>
      <div className={styles.plusBtn}>
        <img src={plus} alt="plus" />
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.text_area}
          placeholder="Start typing something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <img src={emoji} alt="emoji" />
        </div>
      </div>
      <div className={styles.microphone}>
        <img src={microphone} alt="microphone" />
      </div>
      <div className={styles.send_container}>
        <button type="submit" className={styles.btn} onClick={onSubmitHandler}>
          <SendIcon className={styles.icon} />
        </button>
      </div>
    </div>
  )
}

export default MessengerInput
