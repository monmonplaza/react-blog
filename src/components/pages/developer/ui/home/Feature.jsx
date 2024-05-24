import React from 'react'
import Card from './Card'
import SectionHeader from './SectionBanner'
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow';

const Feature = () => {

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


  const getfeature = () =>  post?.data.filter(item => item.post_category_id === 3)


  return (
    <section className='feature py-10'>
    <div className="container">
        <SectionHeader title="Feature Now" hasLink={true} link="/feature"/>
        <div className='grid mt-10 gap-10 md:grid-cols-3'>
          {isLoading ? <SpinnerWindow/> : getfeature().map((item, key)=>(
          <Card height="sm" item={item} key={key}/>
        ))}
      
       
    </div>
    </div>
    </section>
  )
}

export default Feature