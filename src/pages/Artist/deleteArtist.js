import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import AlbumRow from '../../components/AlbumRow'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios, { Axios } from 'axios'
 
 const DeleteArtist = () =>{

    const { state } = useLocation()
    const navigate = useNavigate()

    const deleteArtistById = () =>{
        const { id } = state
        const url = `${URL}/artist/delete/${id}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("Artist deleted Successfully")
                navigate('/artist')
             }else {
                 toast.error("Artist not deleted")
             }
        })
    }

    useEffect(() => {
        deleteArtistById()
      }, [])

     
 }

 export default DeleteArtist