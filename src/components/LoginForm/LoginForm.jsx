import { useForm } from 'react-hook-form'
import './LoginForm.css'

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  })

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
        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginForm
