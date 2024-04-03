import { ChangeEvent, useState, useCallback } from 'react'
import Demo from './components/Demo'

export default function App() {
  const [name, setName] = useState('')
  const [modeLight, setModeLight] = useState(false)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handleSwitch = useCallback(() => {
    return setModeLight((curr) => !curr)
  }, [])

  const handleSendData = useCallback(() => {
    return console.log('sending data')
  }, [])

  return (
    <div>
      <h2>{modeLight ? '🌞' : '🌚'}</h2>
      <input onChange={handleChange} value={name} type="text" />
      <Demo handleSendData={handleSendData} />
    </div>
  )
}
