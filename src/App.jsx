import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Items from './components/Items'
import data from '../data'

function App() {
  const [count, setCount] = useState(0);

  const cards = data.map(items => {
          return (<Items 
              key={items.id}
              title={items.title}
              price={items.price}
              image={`/${items.coverImg}`}
              rating={items.stats.rating}
              reviewCount={items.stats.reviewCount}
              location={items.location}
              />)
          })
  return (
    <>
    <Header />
    <Intro/>
    <section className="cards-list">
      {cards}
    </section>
    </>
  )
}

export default App
