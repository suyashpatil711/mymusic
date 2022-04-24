import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { URL } from "../config"
import { toast } from 'react-toastify'


const AlbumRow = (props) => {
  const { album } = props
  const navigate = useNavigate()


  const confirmDelete = () => {
    var opt= window.confirm("Are you sure you want to delete album ?");
    if(opt){
      navigate('/delete-album',  { state: {id: album.albumId,} })
    }
    else{
      toast.warning("delete operation cancelled!")
  
      return false;
    }
  
  }

  return (
    <tr >
       <td>{album.albumId}</td>
     
       <td>
       <img src={album.albumUrl} className="img-fluid img-thumbnail" alt="movie poster" width={85} />
       </td>

      <td>{album.albumName}</td>
      
      <td>
        <button
          onClick={() => {
            // goto delete album with album id
            // navigate('/add-songs-to-album', { state: {album: album } })
            navigate('/add-songs-to-album',  { state: {album: album } })
          }}
          className="btn btn-success btn-sm">
          Add Track
        </button>

        {/* <button   onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            navigate('/delete-album',  { state: {id: album.albumId,} })
          }}       
        className="btn btn-danger float-end">
            delete
          </button>               */}

       <button   onClick= {confirmDelete}  
        className="btn btn-danger float-end">
            delete
          </button>

      </td>
    </tr>
  )
}

export default AlbumRow
