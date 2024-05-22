import React from 'react'
import UIFooter from '../partials/UIFooter'
import UIHeader from '../partials/UIHeader'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <>  
        <UIHeader/>
        <div className='banner mt-5 mb-10'>
            <div className="container">
                <h1 className='max-w-[800px]  mb-0 mx-auto py-10 px-5 bg-header bg-opacity-10 rounded-lg border-2 border-header border-opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
        </div>

        <div className="container">
            <div className='grid md:grid-cols-[2fr_1fr] gap-10'>
                <article>
                    <div className='mb-10'>
                        <small className='hover:bg-accent bg-stone-600  px-2 py-1 rounded-lg text-white font-bold 
                        text-xs mb-3 inline-block'>Travel</small>

                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

                        <div className='flex justify-between items-center mt-4'>
                            <div className='flex gap-3 items-center'>
                                <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-10 object-cover mb-0' />
                                <small className='mb-0 text-nowrap opacity-60'>Johnny Hale</small>
                            </div>
                            <small className='opacity-60'>August 23, 2022</small>
                        </div>
                    </div>

        
                    <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" />

                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam illum nobis amet magni dicta ea nam. Libero, eos nobis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis id excepturi modi exercitationem a. Voluptas alias cumque esse totam reprehenderit ducimus deleniti ab repudiandae molestias debitis! Cupiditate quo quisquam odit.</p>

                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero provident officiis maxime, minima ipsa molestias rerum earum sint nobis deleniti distinctio, explicabo necessitatibus animi facilis magni quae aut. Commodi libero quidem atque maiores laboriosam ex officiis quam omnis tempore natus?</p>
                    <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" />

                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iste.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                    </ul>
                </article>
                <aside >

                    <div className='sticky top-4'>

                        
                        <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5 ">
                            <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full size-[100px] object-cover mb-5 mx-auto' />
                            <h3 className='text-center'>Johnny Hale</h3>
                            <p className='text-center mb-5 !leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quis assumenda enim voluptatum impedit ad deserunt placeat laboriosam rem, dolorum cumque repellat adipisci ex culpa quam velit eligendi am?</p>

                            <ul className='flex justify-center gap-4'>
                                <li><Link className='text-2xl'><FaFacebook/></Link></li>
                                <li><Link className='text-2xl'><FaTwitter/></Link></li>
                                <li><Link className='text-2xl'><FaInstagram/></Link></li>
                                <li><Link className='text-2xl'><FaYoutube/></Link></li>
                            </ul>
                        </div>

                       
                        <div className="shadow-[4px_2px_10px_5px_rgba(0,0,0,0.1)]  p-5 rounded-2xl mb-5 ">
                            <h2>Latest Post</h2>

                            <div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
                                <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" className='h-full w-full object-cover'/>
                                <div>
                                    <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <small>May 5, 2002</small>
                                </div>
                            </div>
                            <div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
                                <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" className='h-full w-full object-cover'/>
                                <div>
                                    <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <small>May 5, 2002</small>
                                </div>
                            </div>
                            <div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
                                <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" className='h-full w-full object-cover'/>
                                <div>
                                    <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <small>May 5, 2002</small>
                                </div>
                            </div>
                            <div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
                                <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" className='h-full w-full object-cover'/>
                                <div>
                                    <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <small>May 5, 2002</small>
                                </div>
                            </div>
                            <div className='grid grid-cols-[90px_1fr] gap-3 mb-4'>
                                <img src="https://starmometer.com/wp-content/uploads/2021/06/BINI-2.jpg" alt="" className='h-full w-full object-cover'/>
                                <div>
                                    <h4 className='mb-0'>Lorem ipsum dolor sit amet consectetur.</h4>
                                    <small>May 5, 2002</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </aside>
            </div>
        </div>
        <UIFooter/>
    </>
  )
}

export default Single