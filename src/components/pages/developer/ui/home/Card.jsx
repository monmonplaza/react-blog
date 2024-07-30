import React from 'react'
import { devBaseImgUrl } from '../../../../helpers/functions-general'

const Card = ({height="lg", item}) => {
  
  return (
    <div className="card__lg shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl">

    <div className={`overflow-hidden rounded-xl mb-5 -mt-10 ${height === "lg" ? "h-[500px]" : "h-[300]" }`}>

    <img src={`${devBaseImgUrl}/${item?.post_photo}`} alt="" className={`w-full object-cover $ rounded-xl  h-full overflow-hidden  hover:scale-110 transition-transform`}/>
    </div>
    <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
        text-xs'>{item.tag_title}</small>

        <h3 className='my-4'>{item?.post_title}</h3>
        <p className='line-clamp-3 text-balance'>{item?.post_article}</p>

        <div className='flex justify-between items-center mt-4'>
            <div className='flex gap-3 items-center'>
                <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover' />
                <small className='mb-0 text-nowrap opacity-60'>Johnny Hale</small>
            </div>
            <small className='opacity-60'>{item?.post_publish_date}</small>
        </div>
    </div>

  )
}

export default Card