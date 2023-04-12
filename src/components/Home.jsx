import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    //First div for background name is home and class is background color black
    <div
        name="home"
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>  
        {/* After 1st div for screen and mobile class and style*/}
        <div 
            className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>          
            {/* After defining the screen size and alignemnt for both sides */}
            <div 
                className='flex flex-col justify-center h-full'>       
                {/* Heading for my role and experience */}
                <h2 
                    className="text-4xl sm:text-5xl font-bold text-gray-100">
                    
                    <br/><br/>I'm a full stack developer
                
                {/* Ending for my role and experience */}
                </h2>
                {/* para element saying about myself and skills, Less than 5 lines and expertise */}
                <p 
                    className='py-4 max-w-md text-gray-300'>
             
                I have 2 years of experience building and desgining software.
                Currently, I love to work on web application using technologies like
                React, Tailwind, Express, Node.
                {/* para element end about myself and skills, Less than 5 lines and expertise */}
                </p>
                {/* After paragah the div for linking the portfolio */}
                <div>
                    <Link
                        to='portfolio'
                        smooth duration={500}
                        className='group text-gray-100 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>

                        Portfolio

                        {/* span class for adding the aarow symbol after the portfolio */}
                        <span 
                            className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        {/* End of span for button and animation scroll down */}
                        </span>
                    {/* End of link for portfolio whole button and animation */}
                    </Link>
                {/* The end of paragah the div for linking the portfolio whole thing */}
                </div>
            
            {/* End defining the screen size and alignemnt for both sides */}
            </div>
            
            {/* This is for changing your image */}
            <div>
                <img
                    src={HeroImage}
                    alt="my profile"
                    // className="rounded-3xl mx-auto md:h-82 md:w-80 md:ml-60" />
                    className="rounded-2xl mx-auto w-2/3 md:w-80 md:h-78 md:ml-16" />
""            {/* The end of div which changes the image */}
            </div>   

        {/* End of 1st div for screen and mobile class and style*/}
        </div>
    {/* //End div for background name is home and class is background color black */}
    </div>
        
  )
}

export default Home