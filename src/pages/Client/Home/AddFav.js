import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
//import AlbumRow from '../../components/AlbumRow'
import { URL } from '../../../config'
import { toast } from 'react-toastify'
import axios, { Axios } from 'axios'
 
 const AddFav = () =>{

    const { state } = useLocation()
    const navigate = useNavigate()
    const userId = sessionStorage['id']
    
   // const favStatus = 1
    const { id } = state
    const songId=id
    const addFavSongById = () =>{
       
        const favStatus = 1
        // setIsRemoved(true)
         const body = {
           userId,
           songId,
           favStatus,
         }
         console.log(body)
         console.log("add to favorite")
         const url = `${URL}/add/fav/song`
     
         axios.post(url, body).then((response) => {
           // get the data from the response
           const result = response.data
           console.log(result)
           if (result['status'] == 'success') {
             toast.success('Song added to favorite List')
             //  navigate('/songs-navigate')
             navigate('/songs-list')     
           } else {
             toast.error(result['error'])
           }
          // setFavStatus('0')
         // navigate('/delete-song',{ state: {id: song.songId} })
     
        })
    }

    useEffect(() => {
        addFavSongById()
      }, [])

     
 }

 export default AddFav