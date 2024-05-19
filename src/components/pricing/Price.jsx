import React from 'react'
import "./price.css"
import PriceCard from './PriceCard'
import Faq from "./Faq"
const Price = () => {
  return (
    <>
        
        <section className="price padding">
            <div className="container grid">
                <PriceCard />
            </div>
        </section>
        <Faq />
    </>
  )
}

export default Price