import { ChangeEvent, useState } from 'react'
import Input from './Input'

type Form = {
  email: string
  password: string
  fullname: string
}

const initialState: Form = {
  email: '',
  password: '',
  fullname: '',
}

export default function SignUp() {
  const [form, setForm] = useState<Form>(initialState)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleCreateUser = async () => {
    const response = await fetch(
      'https://uxonyqlchonyeukyqerd.supabase.co/auth/v1/signup',
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
          user_metadata: {
            name: form.fullname,
          },
        }),
      }
    )

    if (response.ok) {
      const data = await response.json()
      console.log('User created', data)
    } else {
      const error = await response.json()
      console.error('Error creating user: ', error)
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
          value={form.fullname}
          name="fullname"
          placeholder="fullname"
        />
      </div>

      <div className="mb-2">
        <Input
          onChange={onChange}
          value={form.password}
          name="password"
          placeholder="password"
          type="password"
        />
      </div>
      <button
        onClick={handleCreateUser}
        className="bg-slate-800 rounded py-2 w-full text-white"
      >
        Create
      </button>
    </div>
  )
}
