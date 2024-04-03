import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const $root = document.getElementById('root')

if ($root) {
  const root = createRoot($root)
  root.render(<App />)
}
