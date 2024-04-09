import { useState, memo } from 'react'
import { initialItems } from '../utils'

type DemoProps = {
  name?: string
  handleSwitch?: () => void
  handleSendData?: () => void
}

function Demo({ handleSendData }: DemoProps) {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)

  const selectedItem = items.find((item) => item.isSelected)

  console.count('Demo rendering')

  // const selectedItem = useMemo(() => {
  //   return items.find((item) => item.isSelected)
  // }, [])

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button onClick={handleSwitch}>Switch Mode</button> */}
      <button onClick={handleSendData}>Send Data</button>
      <input type="text" />
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Demo)
