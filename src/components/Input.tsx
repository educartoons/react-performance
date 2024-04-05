import { ChangeEvent, InputHTMLAttributes } from 'react'

type InputProps = {
  name: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({
  name,
  onChange,
  value,
  placeholder,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      required
    />
  )
}
