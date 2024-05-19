import React from 'react'
import './team.css'
import TeamCard from "./TeamCard"
const Team = () => {
  return (
    <>
      <section className='team-bar'>
     <div className='container flexSB'>
     <div className='left row'>
     <h1>Mastermind educational website teachers</h1>
            <span>Get to know the professors of the Mastermind educational platform</span>
        </div>
        
        </div>
     </section>
    <section className="team padding">
        <div className="container grid">
            <TeamCard/>

        </div>
    </section>
    </>
  )
}

export default Team