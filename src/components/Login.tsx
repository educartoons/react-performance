import { ChangeEvent, useState } from 'react'
import Input from './Input'

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

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleCreate = async () => {
    const response = await window.fetch(
      `https://uxonyqlchonyeukyqerd.supabase.co/auth/v1/token?grant_type=password`,
      {
        method: 'POST',
        headers: {
          apiKey: `${import.meta.env.VITE_SUPABASE_KEY}`,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: form.email, password: form.password }),
      }
    )

    if (response.ok) {
      const data = await response.json()
      saveToken(data.access_token)
      return data
    } else {
      const error = await response.json()
      console.error('Error logging in:', error)
      throw new Error(error.message)
    }
  }

  return (
    <div className="w-80 mx-auto">
      <div>
        <Input
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="email"
        />
      </div>
      <div className="mt-2">
        <Input
          onChange={onChange}
          value={form.password}
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mt-2">
        <button
          onClick={handleCreate}
          className="bg-slate-700 text-white w-full rounded py-2"
        >
          Create
        </button>
      </div>
    </div>
  )
}
