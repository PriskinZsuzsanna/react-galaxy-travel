import React from 'react'
import './Prices.css'
import HeroImg from '../components/HeroImg'
import Pricing from '../components/Pricing'

const Prices = () => {
  return (
    <>
      <HeroImg
      heading="Árak"
      text="Válassz egy utat." />
      <Pricing />
    </>
  )
}

export default Prices
