import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import PostTable from './TagTable'
import { FiPlus } from 'react-icons/fi'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import Searchbar from '../../../../partials/Searchbar'
import ModalAddtag from './ModalAddTag'
import tagTable from './TagTable'
import TagTable from './TagTable'
import ModalAddTag from './ModalAddTag'

const Tag = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword , setKeyword] = React.useState('');
    const [itemEdit , setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: tag,
      } = useQueryData (
       "/v1/tag", // endpoint
       "get", // method
       "tag", // key      
      );


      console.log(tag)


      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null)
    }



  return (
    <section className='flex overflow-hidden'>
    <Navigation menu="tag"/>
    <main className='w-[calc(100%-250px)] overflow-x-hidden'>
        <Header/>

    <div className='flex '>
        <div className={`main-wrapper transition-all px-4 py-3  sticky top-0 w-full`}>
            <div className='flex justify-between items-center'>
                <h1>Tag</h1>
                <Searchbar setIsSeach={setIsSearch} setKeyword={setKeyword}/>
            </div>
        
            <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
                <h2>Seacrh</h2>
                <button className='btn btn--accent' onClick={handleAdd} >
                    <FiPlus/> New
                </button>
            </div>
            <TagTable isLoading={isLoading} tag={tag} isFetching={isFetching} setItemEdit={setItemEdit}/>
        </div>
    </div>
    </main>

    {store.isAdd && <ModalAddTag  itemEdit={itemEdit}/>}

    {store.error && <ModalError position="center"/>}
    {store.success && <Toast/>}
</section>
  )
}

export default Tag