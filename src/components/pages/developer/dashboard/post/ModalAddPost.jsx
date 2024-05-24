import React from 'react'

import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'

import * as Yup from 'yup'
import { StoreContext } from '../../../../../store/StoreContext'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'
import useQueryData from '../../../../custom-hook/useQueryData'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { InputFileUpload, InputSelect, InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { devBaseImgUrl } from '../../../../helpers/functions-general'


const ModalAddPost = ({itemEdit, position }) => {

    const {store, dispatch} = React.useContext(StoreContext);

    const handleClose = () => dispatch(setIsAdd(false));


    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );
    
      const {
        isLoading,
        isFetching,
        error,
        data: category,
      } = useQueryData(
        `/v1/category`, // endpoint
        "get", // method
        "category" // key
      );




    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/post/${itemEdit.post_aid}` :`/v1/post`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["post"] });
       
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } 
        else {
           dispatch(setError(true))
           dispatch(setMessage(data.error));
      
        }
        },
    });
    

    const initVal = {
        post_photo: itemEdit ? itemEdit.post_photo : "",
        post_title : itemEdit ? itemEdit.post_title : "",
        post_category_id : itemEdit ? itemEdit.post_category_id : "",
        post_article : itemEdit ? itemEdit.post_article : "",
        post_author : itemEdit ? itemEdit.post_author : "",
        post_publish_date : itemEdit ? itemEdit.post_publish_date : "",
    }

    const yupSchema = Yup.object({
        // post_title: Yup.string().required('Required'),
        // post_photo: Yup.string().required('Required'),
        // post_category: Yup.string().required('Required'),
        // post_article: Yup.string().required('Required'),
        // post_author: Yup.string().required('Required'),
        // post_publish_date: Yup.string().required('Required'),
    })
  return (
    <ModalWrapper position={position}>
    <div className="main-modal w-[900px] bg-secondary text-content">
              <div className="modal-header p-4 relative">
                  <h2>New post</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                        console.log(values)
                        uploadPhoto()
                        mutation.mutate({...values, 
                            post_photo:
                            (itemEdit && itemEdit.post_photo === "") || photo
                              ? photo === null
                                ? itemEdit.post_photo
                                : photo.name
                              : values.post_photo})
                              
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col'>
                      <div className='grow overflow-y-auto mb-5'>
                            <div className="input-wrap">
                                <InputText
                                    label="Title"
                                    type="text"
                                    name="post_title"
                                />
                            </div>
                            <div className='grid grid-cols-[1fr_2fr] gap-10'>
                                <div className='left'>

                            <div className="input-wrap">
                                        {photo || (itemEdit && itemEdit.post_photo !== "") ? (
                                        <img  src={photo
                                          ? URL.createObjectURL(photo) // preview
                                          : itemEdit.post_photo // check db
                                          ? devBaseImgUrl + "/" + itemEdit.post_photo
                                          : null
                                        }
                                          alt="Photo"
                                          className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                                        />
                                        ) : (
                                          <span className="w-full h-[200px] flex items-center justify-center">
                                          <span className="text-accent mr-1 ">Drag & Drop</span>{" "}
                                          photo here or{" "}
                                          <span className="text-accent ml-1">Browse</span>
                                          </span>
                                        )}

                                        {(photo !== null ||
                                        (itemEdit && itemEdit.post_photo !== "")) && (
                                            <span className="min-h-10 flex items-center justify-center">
                                            <span className="text-accent mr-1">Drag & Drop</span>{" "}
                                            photo here or{" "}
                                            <span className="text-accent ml-1">Browse</span>
                                            </span>
                                        )}

                                        <InputFileUpload
                                            label="Photo"
                                            name="photo"
                                            type="file"
                                            id="myFile"
                                            accept="image/*"
                                            title="Upload photo"
                                            onChange={(e) => handleChangePhoto(e)}
                                            onDrop={(e) => handleChangePhoto(e)}
                                            className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
                                        />
                                        </div>

                                        <div className="input-wrap">
                                            <InputText
                                                label="Tag"
                                                type="text"
                                                name="post_category"
                                            />

                                            
                                        </div>

                                        <div className="input-wrap">
                                        <InputSelect
                                            label="Category"
                                            type="text"
                                            name="post_category_id">
                                                {category?.data.map((item, key)=> (
                                                    <React.Fragment key={key}>
                                                        <option hidden>Select</option>
                                                        <option value={item.category_aid} >{item.category_title}</option>
                                                    </React.Fragment >
                                                )
                                            )} 
                                        </InputSelect>
                                        </div>
                             

                              <div className="input-wrap">
                                  <InputText
                                      label="Publish Date"
                                      type="date"
                                      name="post_publish_date"
                                  />
                              </div>

                              
                              <div className="input-wrap">
                                  <InputText
                                      label="Author"
                                      type="text"
                                      name="post_author"
                                  />
                              </div>

                                  </div>

                              <div className='right'>
                               

                                  <div className="input-wrap">
                                    <InputTextArea
                                          label="Article"
                                          type="text"
                                          name="post_article"
                                          className='h-[29.7rem] resize-none'
                                      />
                                  </div>
                              </div>
                           
                            </div>
                      </div>

                      <div className='form-action max-w-[400px] ml-auto w-full'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddPost