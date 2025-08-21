import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewProjectForm from './components/NewProjectForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewProjectForm/>
    </>
  )
}

export default App
