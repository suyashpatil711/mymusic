import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router"
import { toast } from 'react-toastify'
import { URL } from '../../../config'
import FavoriteSongList from './FavoriteSongList'


const FavoriteSongs = (props) => {
  const { favoriteSong } = props
  
  const navigate = useNavigate()
  const userId = sessionStorage['id']

  const audiourl=URL+"/audio/"+favoriteSong.songTrack
    
  return (

    <tr>
      <td className="w-10">{favoriteSong.songId}</td>

      <td className="name"><img src={favoriteSong.songUrl+" "} className="img-fluid img-thumbnail" alt="movie poster" width={85} />

        {favoriteSong.songName}
        
        <audio style={{marginLeft:'30px'}} src={audiourl} controls/>
          {console.log("Track is : "+audiourl)}

        </td>

      <td> {favoriteSong.genre} </td>

      <td> {favoriteSong.language} </td>

      {/* <td >

        <button onClick={AddFavorite}   
          className="btn btn-primary">
          Add
        </button>

        <button onClick={RemoveFavorite}     
          className="btn btn-warning">
          Remove
        </button>
        
      </td> */}
    </tr>

  )
}

export default FavoriteSongs
