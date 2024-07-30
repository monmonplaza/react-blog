import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Logo from './svg/Logo';
import {motion} from 'framer-motion'

const Navigation = ({menu}) => {

  const navList = [
    {
      menu : "post",
      url : "/dashboard/post", 
      icon: <AiOutlineMessage />, 
      name: "Post"
    }, 

    {
      menu : "category",
      url : "/dashboard/category", 
      icon: <MdOutlineDashboard />, 
      name: "Category"
    }, 

    {
      menu : "tag",
      url : "/dashboard/tag", 
      icon: <MdOutlineDashboard />, 
      name: "Tag"
    }, 
  ]

  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line sticky top-0'>
      <div className='flex items-center gap-4'>
        <Logo/>
        <h1 className='mb-0'>School</h1>
      </div>
      

      <ul className='nav'>
         {navList.map((item, i) => (
          <motion.li className={`nav-link ${menu === item.menu ? "active" : ""}`}  
            key={i}
            initial={{opacity: 0, x: "-10px"}}
            animate={{opacity: 1, x: "0px"}}
            exit={{opacity: 0, x: "-10px"}}
            transition={{duration: .5, delay: i *0.1}}
            >
              <Link to={`${item.url}`}>{item.icon} {item.name}</Link>
          </motion.li>
         ))}        
        
      </ul>
    </aside>
  )
}

export default Navigation
