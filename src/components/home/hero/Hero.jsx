import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './hero.css';
import Title from '../../common/title/Title';
import prof from '../../../assets/prof_photo.jpg';

const Hero = () => {
  const [btn, setBtn] = useState("");
  let history = useHistory();

  const handleGetStartedClick = () => {
    history.push('/login');
  };
  const handleViewCourses = () => {
    history.push('/courses');
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="">
            <div className="div2">
              <img src={prof} alt="Description" />
            </div>
            <div className="div1">
              <Title subtitle='welcome to master mind' title='the best education online' />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
              <button onClick={handleGetStartedClick} className="home_btn1">
                GET STARTED NOW !
              </button>
              <button onClick={handleViewCourses} className='home_btn2'>
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
