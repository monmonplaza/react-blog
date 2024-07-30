import React from 'react'
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow';
import { devBaseImgUrl } from '../../../../helpers/functions-general';
import Slider from 'react-slick';

const BannerSlider = () => {

    
    const {
        isLoading,
        isFetching,
        error,
        data: post,
      } = useQueryData (
       "/v1/post", // endpoint
       "get", // method
       "post", // key
      );

      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        nav: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div className='banner-slider'>
    
            {isLoading ? <SpinnerWindow/> : 
                <Slider {...settings}>
                {post?.data.slice(0, 4).map((item, key)=>(
                <div className='relative  place-content-center h-[50vh] bg-black'>
                    <img src={`${devBaseImgUrl}/${item.post_photo}`} alt="" className='object-cover h-[50vh] w-full absolute top-0 left-0 opacity-25' />
                    <div className='text-center'>
                        <ul className='flex justify-center gap-2'>
                            <li className='bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                            text-xs'>{item.tag_title}</li>
                        </ul>
        
                        <h2 className='px-1 mt-4 text-balance text-3xl text-white'>{item.post_title}</h2>
        
                        <ul className='flex justify-center gap-4 text-sm text-white'>
                            <li>{item.post_author}</li>
                            <li>{item.post_publish_date}</li>
                        </ul>
                    </div>
                </div>
                ))}
                </Slider>
            }
       
    </div>
  )
}

export default BannerSlider