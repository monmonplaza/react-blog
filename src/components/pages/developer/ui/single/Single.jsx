import React from 'react'
import UIFooter from '../partials/UIFooter'
import UIHeader from '../partials/UIHeader'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { devBaseImgUrl, getUrlParam } from '../../../../helpers/functions-general'
import useQueryData from '../../../../custom-hook/useQueryData'
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow'
import Markdown from 'react-markdown'

const Single = () => {
    const id = getUrlParam().get('id')
    const [uid, setUid] = React.useState(id)

    const {
        isLoading,
        isFetching,
        error,
        data: post,
      } = useQueryData (
       `/v1/post/${id}`, // endpoint
       "get", // method
       ["post",  uid], // key
      );

      const {
        isLoading: AllIsLoading,
        data: allPost,
      } = useQueryData (
       `/v1/post`, // endpoint
       "get", // method
       "allPost", // key
      );





      function findIndexById(idToFind, dataArray) {
        for (let i = 0; i < dataArray.length; i++) {
          if (dataArray[i].post_aid === idToFind) {
            return i;
          }
        }
        return -1; // If the ID is not found
      }


      const index = findIndexById(!isLoading && post?.data[0].post_aid, !AllIsLoading && allPost?.data);

      console.log(index)




      const getRandomPostPrev = () => (index !== -1) && index -1;
      const getRandomPostNext = () => (index !== -1) && index + 1;


      const {
        isLoading:sideIsLoading,
        isFetching:sideIsFetching,
        error:sideError,
        data: latestpost,
      } = useQueryData (
       `/v1/post`, // endpoint
       "get", // method
       "postx", // key
      );


      const handleChangeURL = () => setUid(getUrlParam().get('id'))




      
  return (
    <>  
        <UIHeader/>

        {isLoading ? <SpinnerWindow/> : (
            <>
                 <div className='banner mt-5 mb-10'>
                      <div className="container">
                           <h1 className='max-w-[800px]  mb-0 mx-auto py-10 px-5 bg-header bg-opacity-10 rounded-lg border-2 border-header border-opacity-40'>
                            {post?.data[0].post_title}
                           </h1>
                       </div>
                   </div>
                  <div className="container">
                      <div className='grid md:grid-cols-[2fr_1fr] gap-10'>

                            <div>
                                <img src={`${devBaseImgUrl}/${post?.data[0].post_photo}`} alt="" />

                              <article >
                                <ul className='flex justify-between items-center list-none'>
                                    <li>{post?.data[0].post_category}</li>
                                    <li>{post?.data[0].post_publish_date}</li>
                                </ul>
                                <Markdown > 
                                    {post?.data[0].post_article}
                                </Markdown > 
                              </article>


                              <div className='flex justify-between items-center'>
                                <Link onClick = {()=> handleChangeURL()} to={`/single?id=${getRandomPostPrev()}`} className="prev flex items-center gap-2  bg-secondary p-1 rounded-lg">
                                    <img src={`${devBaseImgUrl}/${getRandomPostPrev.post_photo}`} alt="" className='size-[80px]  object-cover rounded-lg'/>
                                    <h5 className='text-sm truncate w-[150px]'>{getRandomPostPrev.post_title}</h5>
                                </Link>

                                <Link onClick = {()=> handleChangeURL()} to={`/single?id=${getRandomPostNext()}`} className="next flex items-center gap-2 bg-secondary p-1 rounded-lg">
                                    <img src={`${devBaseImgUrl}/${getRandomPostNext.post_photo}`} alt="" className='size-[80px]  object-cover rounded-lg'/>
                                    <h5 className='text-sm truncate w-[150px]'>{getRandomPostNext.post_title}</h5>
                                </Link>
                              </div>
                            </div>

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
                                    {sideIsLoading ? <SpinnerWindow/> : (
                                        latestpost?.data.slice(0, 3).map((item, key)=> (
                                            
                                            <div className='grid grid-cols-[90px_1fr] gap-3 mb-4' key={key}>
                                                <img src={`${devBaseImgUrl}/${item.post_photo}`} alt="" className='h-full w-full object-cover'/>
                                                <div>
                                                    <h4 className='mb-0'>{item.post_title}</h4>
                                                    <small>{item.post_publish_date}</small>

                                                </div>
                                            </div>
                                        ))
                                    )}
                                  </div>
                              </div>
          
                          </aside>
                      </div>
                  </div>
            </>
        )}     
        <UIFooter/>
    </>
  )
}

export default Single