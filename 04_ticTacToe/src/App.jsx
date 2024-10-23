import { useState } from 'react'
import './App.css'
import Grid from './components/Grid/Grid'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Grid numberOfCards={9}/>
      <ToastContainer position="top-right" />
   </>
  )
}

export default App
