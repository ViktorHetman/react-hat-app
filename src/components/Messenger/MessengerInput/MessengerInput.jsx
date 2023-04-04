import { TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import styles from './MessengerInput.module.css'

function MessengerInput() {
  return (
    <div className={styles.text_field}>
      <div>
        <TextField
          className={styles.text_area}
          variant="outlined"
          placeholder="Message for your friend"
          multiline
          rows={3}
        />
        <SendIcon className={styles.icon} />
      </div>
    </div>
  )
}

export default MessengerInput
