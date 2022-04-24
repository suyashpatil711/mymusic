import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import AlbumRow from '../../components/AlbumRow'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios, { Axios } from 'axios'
 
 const DeleteAlbum = () =>{

    const { state } = useLocation()
    const navigate = useNavigate()

    const deleteAlbumById = () =>{
        const { id } = state
        const url = `${URL}/album/delete/${id}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("Album deleted Successfully")
                navigate('/admin')
             }else {
                 toast.error("Album not deleted")
             }
        })
    }

    useEffect(() => {
        deleteAlbumById()
      }, [])

     return (
         <h1>delete album</h1>
     )
 }

 export default DeleteAlbum