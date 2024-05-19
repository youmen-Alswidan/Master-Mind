import React, { useState } from 'react'
import "./hero.css"
import Title from '../../common/title/Title'
import prof from '../../../assets/prof_photo.jpg'




const Hero = () => {
  const [btn, setBtn] = useState("")

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="">
            <div className="div2">
              <img src={prof} alt="Description" />
            </div>
            <div className="div1">
              < Title subtitle='welcome to master mind' title='the best education online' />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <button onClick={() => setBtn("test1")} className="home_btn1">
                GET STARTED NOW
              </button>
              <button onClick={() => setBtn("test2")} className='home_btn2' >
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>

            </div>


          </div>


        </div>
      </section>
      <div className="marigin">

      </div>
    </>
  )
}

export default Hero