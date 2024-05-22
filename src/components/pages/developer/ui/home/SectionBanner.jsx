import React from 'react'
import { Link } from 'react-router-dom'

const SectionHeader = ({title="Trending", hasLink=false, link="#"}) => {
  return (
    <div className='flex justify-between items-center'>
        <h3 className='text-2xl pl-3 border-l-4 border-accent'>{title}</h3>
        {hasLink && <Link to={link} className='border rounded-md bg-transparent border-gray-500 px-2 py-1'>View All</Link>}
    </div>
  )
}

export default SectionHeader