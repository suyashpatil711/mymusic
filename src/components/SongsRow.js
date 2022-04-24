import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { URL } from "../config"
import { toast } from 'react-toastify'


const SongsRow = (props) => {
  const { song } = props
  const navigate = useNavigate()

  const confirmDelete = () => {
    var opt= window.confirm("Are you sure you want to delete Song ?");
    if(opt){
      navigate('/delete-song',{ state: {id: song.songId} })
    }
    else{
      toast.warning("delete operation cancelled!")

      return false;
}
}

  return (

    <tr>
    <td className="w-10">{song.songId}</td>
            
    <td className="name"><img src={song.songUrl} className="img-fluid img-thumbnail" alt="movie poster" width={85} />

    {"  "+song.songName}
    
    </td>
  
    <td> {song.genre} </td>
      
    <td> {song.language} </td>
   
    <td>
    {/* <button   onClick={() => {
            
            navigate('/delete-song',{ state: {id: song.songId} })
          } }      
        className="btn btn-danger ">
            delete
          </button> */}

        <button   onClick={confirmDelete}      
        className="btn btn-danger ">
            delete
          </button>

    </td>
  </tr>

  )
}

export default SongsRow
