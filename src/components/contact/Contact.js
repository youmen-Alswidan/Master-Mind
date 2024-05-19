import React from 'react'
import "./contact.css"

const Contact = () => {
    const map =  ' https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6742221.395357328!2d28.916668700503138!3d34.39879670716615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2sSyrien!5e0!3m2!1sde!2sde!4v1714823856517!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
        
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Cotact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="items grid2">
                <div className="box">
                    <h4>Addrees: </h4>
                    <p>    Damascus.Syria</p>
                </div>
                <div className="box">
                <h4>EMAIL:</h4>
                <p> Mastermind@gmail.com</p>
                </div>
                <div className="box">
                <h4>PHONE:</h4>
                <p> +963 976543321</p>
                </div>  
            </div>
            <form action=''>
            <div className='flexSB'>
            <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span>
          </div>
          </div>
      </section>
    </>
  )
}

export default Contact