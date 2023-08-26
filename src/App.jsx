import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceCard from './PriceCard'

function App() {
  // const [count, setCount] = useState(0)
  const [toggleVal, setToggle] = useState(false)

  function handleClick(e) {
    console.log('Event: ', e.target.value)
    setToggle(prev => !prev)
  }

  return (
    <div className='pricing-section'>
      <h1 className='primary-heading'>Our Pricing</h1>
      <div className='pricing-toggle-container'>
        <p className='pricing-toggle-text'>Annually</p>
        <label className="switch">
          <input value={toggleVal} onClick={handleClick} type="checkbox" />
          <span className="slider"></span>
        </label>
        <p className='pricing-toggle-text'>Monthly</p>
      </div>
      <div className='price-grid'>
        <PriceCard isPrimary={false} />
        <PriceCard isPrimary={true} />
        <PriceCard isPrimary={false} />
      </div>

    </div>
  )
}

export default App
