import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch, useSelector } from 'react-redux'

import { postMessage } from '../../../services/postMessage'

import styles from './MessengerInput.module.css'

function MessengerInput() {
  const dispatch = useDispatch()
  const chatId = useSelector((state) => state.sendMessage.chatId)

  const textHandle = (e) => {
    localStorage.setItem('text', e)
    e = ''
  }

  const onSubmitHandler = () => {
    dispatch(postMessage(chatId))
  }

  return (
    <div className={styles.text_field}>
      <TextField
        className={styles.text_area}
        variant="outlined"
        placeholder="Message for your friend"
        multiline
        rows={3}
        onChange={(e) => textHandle(e.target.value)}
      />
      <div className={styles.send_container}>
        <button type="submit" className={styles.btn} onClick={onSubmitHandler}>
          <SendIcon className={styles.icon} />
        </button>
      </div>
    </div>
  )
}

export default MessengerInput
