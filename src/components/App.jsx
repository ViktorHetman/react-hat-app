import { Routes, Route, Navigate } from 'react-router-dom'

import Main from '../pages/Main'
import Login from '../pages/Login'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'*'} element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
