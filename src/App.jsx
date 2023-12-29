import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Items from './components/Items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Intro/>
    <section className="cards-list">
      <Items/>
    </section>
    </>
  )
}

export default App
