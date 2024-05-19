import React from 'react'
import { price } from '../../dummydata'
import "./price.css"
const PriceCard = () => {
  return (
    <>
        {price.map((val)=>(
            <div className='items shadow'>
                <h4>{val.name}</h4>
                <p>{val.desc}</p>
            </div>
        ))}
    </>
  )
}

export default PriceCard