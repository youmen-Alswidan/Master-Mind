import React   from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'

  const OnlineCourses = () => {
    
  return (
    <>
        <section className="online">
            <div className="container">
                <Title subtitle="COURSES" title="Browse our online courses"/>
                <div className="content grid3">
                    {online.map((val)=>(
                        <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            <img src={val.hoverCover}alt=""  className='show'/>
                        </div>
                        <h1>{val.courseName}</h1>
                        <button   className="outline-btn">{val.course}</button>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </section>

    </>
  )
}

export default OnlineCourses