import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceCard from './PriceCard'

function App() {
  // const [count, setCount] = useState(0)
  const data = [
    {
      title: 'Basic',
      month: '$19.99',
      year: '$191.99',
      perks: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']
    },
    {
      title: 'Professional',
      month: '$24.99',
      year: '$239.99',
      perks: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB']
    },
    {
      title: 'Master',
      month: '$39.99',
      year: '$374.99',
      perks: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']
    },
  ]
  const [prices, setPrices] = useState([data[0].year, data[1].year, data[2].year])

  const [toggleVal, setToggle] = useState(true)

  function handleClick(e) {
    // console.log('Event: ', e.target.value)
    if (toggleVal === true) {
      setPrices([data[0].month, data[1].month, data[2].month])
      setToggle(prev => !prev)
    } else {
      setPrices([data[0].year, data[1].year, data[2].year])
      setToggle(prev => !prev)
    }

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
        <PriceCard price={prices[0]} data={data[0]} isPrimary={false} />
        <PriceCard price={prices[1]} data={data[1]} isPrimary={true} />
        <PriceCard price={prices[2]} data={data[2]} isPrimary={false} />
      </div>

    </div>
  )
}

export default App
