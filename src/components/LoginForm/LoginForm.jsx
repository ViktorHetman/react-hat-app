import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { setUser } from '../../store/slices/loginSlice'

import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch()
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
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

  const onSubmit = () => {
    reset()
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
        <div style={{ height: 20 }}>
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
        <div style={{ height: 20 }}>
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
        <div style={{ height: 20 }}>
          {errors?.appId && <p>{errors?.appId?.message || 'Ошибка!'}</p>}
        </div>
        <button type="submit">Sign In!</button>
      </form>
    </div>
  )
}

export default LoginForm
