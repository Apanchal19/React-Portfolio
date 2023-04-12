import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin  size={30} />
                </>
            ),
            href:"https://linkedin.com/in/akshaypanchal2023",
            style: "rounded-tr-md"
        },
        {
            id:2,
            child: (
                <>
                    GitHub <FaGithub  size={30} />
                </>
            ),
            href:"https://github.com/Apanchal19",
            
        },
        {
            id:3,
            child: (
                <>
                    Mail <HiOutlineMail  size={30} />
                </>
            ),
            href:"mailto:akshay.panchalhp@gmail.com",
            
        },
        {
            id:4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill  size={30} />
                </>
            ),
            href:"/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];


  return (
    <div>
        <div className=' hidden lg:flex flex-col top-[35%] fixed left-0'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                   <li 
                    key={id}
                    className={
                        // eslint-disable-next-line no-useless-concat
                        "flex justify-between items-center bg-gray-500 h-14 w-40 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md" + " "  + style}>
                        <a href={href}
                            className="flex justify-between items-center w-full
                             text-white"
                             download={download}
                             target="_blank"
                             rel='noreferrer'> 
                             {child}
                        </a>
                    </li>     
                ))}            
            </ul>
        </div>
    </div>
  )
}

export default SocialLinks