import { ChangeEvent, useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'

type Form = {
  email: string
  password: string
}

const initialState: Form = {
  email: '',
  password: '',
}

const saveToken = (token: string) => {
  localStorage.setItem('supabase.auth.token', token)
}

export default function Login() {
  const [form, setForm] = useState<Form>(initialState)
  const navigate = useNavigate()
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = async () => {
    const response = await fetch(
      'https://uxonyqlchonyeukyqerd.supabase.co/auth/v1/token?grant_type=password',
      {
        method: 'POST',
        headers: {
          apiKey: import.meta.env.VITE_SUPABASE_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      }
    )

    if (response.ok) {
      const data = await response.json()
      saveToken(data.access_token)
      navigate('/')
    } else {
      const error = await response.json()
      console.error('Error logging in: ', error)
    }
  }

  return (
    <div>
      <div className="mb-2">
        <Input
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="Email"
        />
      </div>

      <div className="mb-2">
        <Input
          onChange={onChange}
          value={form.password}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <button
        onClick={handleLogin}
        className="bg-slate-800 rounded py-2 w-full text-white"
      >
        Log in
      </button>
    </div>
  )
}
