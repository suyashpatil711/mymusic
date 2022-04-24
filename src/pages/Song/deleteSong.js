import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import AlbumRow from '../../components/AlbumRow'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios, { Axios } from 'axios'
 
 const DeleteSong = () =>{

    const { state } = useLocation()
    const navigate = useNavigate()

    const deleteSongById = () =>{
        const { id } = state
        debugger
        const url = `${URL}/song/delete/${id}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("Song deleted Successfully")
                navigate('/all-songs')
             }else {
                 toast.error("Song not deleted")
             }
        })
    }

    useEffect(() => {
        deleteSongById()
      }, [])

     
 }

 export default DeleteSong