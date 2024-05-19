import React from 'react'
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import"./courses.css"
const CourseHome = () => {
  return (
    <>
     
     <section className='home'>
     <div className='container flexSB'>
     <div className='left row'>
     <h1>get the latest update and new courses</h1>
            <span>Choose the course  you need</span>
        </div>
        
        </div>
     </section>
      < CoursesCard/>
      < OnlineCourses/>
    </>
  )
}

export default CourseHome