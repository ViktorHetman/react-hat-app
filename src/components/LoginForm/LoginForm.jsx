import { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setUser } from '../../store/slices/loginSlice'
import { getTokens } from '../../services/getTokens'

import './LoginForm.css'

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  })

  const watchAllFields = watch()

  dispatch(
    setUser({
      email: watchAllFields.email,
      password: watchAllFields.password,
      userAppId: watchAllFields.appId,
    })
  )

  const user = {
    email: useSelector((state) => state.login.email),
    password: useSelector((state) => state.login.password),
    appId: useSelector((state) => state.login.userAppId),
  }

  const error = useSelector((state) => state.login.error)

  useEffect(() => {
    navigate('/login')
  }, [navigate])

  const onSubmit = () => {
    dispatch(getTokens(user))
    dispatch(
      setUser({
        error: null,
      })
    )
    if (error === null) {
      navigate('/')
    }
  }

  return (
    <div>
      <h1>React Chat App</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: 'The field is required',
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.email && <p>{errors?.email?.message || 'Ошибка!'}</p>}
        </div>
        <label>
          Password:
          <input
            type="password"
            {...register('password', {
              required: 'The field is required',
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.password && <p>{errors?.password?.message || 'Ошибка!'}</p>}
        </div>
        <label>
          App ID:
          <input
            type="text"
            {...register('appId', {
              required: 'The field is required',
            })}
          />
        </label>
        <div style={{ height: 10 }}>
          {errors?.appId && <p>{errors?.appId?.message || 'Ошибка!'}</p>}
        </div>
        <button type="submit">Sign In!</button>
      </form>
    </div>
  )
}

export default LoginForm
