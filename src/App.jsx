import { useEffect, useState } from 'react'
import './App.css'
import FirebaseAuth from "/components/FirebaseAuth.jsx"
import FireStore from "/components/FireStore.jsx"

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <h1>Firebase DEMO</h1>
      {/* <FirebaseAuth></FirebaseAuth> */}
      <FireStore></FireStore>
    </>
  )
}

export default App
