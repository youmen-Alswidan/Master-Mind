import React ,{useState}from 'react'
import './login.css'
const Login  = () => {
    const[action,setAction] =useState("Sign UP")
  return (
    <div className=' containe'>
        <div className="headere">
            <div className="texte"> {action}</div>
            <div className="underline"> </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src="" alt="" />
                <input type="text" placeholder='Name' />
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="forget-password">Forget password? <span>Click here </span></div>
        <div className="submite-container">
            <div className="submit">Sign UP</div>
            <div className="submit">Log in</div>
        </div>
    </div>
  )
}

export default Login