import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate, useLocation } from "react-router"
import { toast } from 'react-toastify'
import { URL } from '../../../config'


const Songs = (props) => {
  const { song } = props

  const navigate = useNavigate()
  const userId = sessionStorage['id']
  const [favStatus, setFavStatus] = useState(song.favStatus)
  //const [isRemoved, setIsRemoved] = useState(false);
  const audiourl = URL + "/audio/" + song.songTrack

  const songId = song.songId
  const AddFavorite = () => {
   // navigate('/Add-FavSong',{ state: {id: song.songId} })
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
      } else {
        toast.error(result['error'])
      }
     // setFavStatus('0')
    // navigate('/delete-song',{ state: {id: song.songId} })

     window.location.reload();
    })
  }


  const RemoveFavorite = () => {

    console.log("Remove to favorite")
    const url = `${URL}/delete/fav/song/${songId}/${userId}`
   // const [isfav, setIsfav] = useState(1);
    axios.delete(url).then((response) => {

      const result = response.data
      console.log(result)
      if (result['status'] == 'success') {
        toast.success('Song Remove from favorite List')
        //window.location.reload(); 
      } else {
        toast.error(result['error'])
      }
     // setFavStatus('1')
     window.location.reload();
     

    })
  }
  
  return (

    <tr>
      <td className="w-10">{song.songId}</td>

      <td>
        <img src={song.songUrl} className="img-fluid img-thumbnail" alt="movie poster" width={85} />

        {"  " + song.songName}


        <audio style={{ marginLeft: '30px' }} src={audiourl} controls />
        {console.log("Track is : " + audiourl)}
      </td>

      <td> {song.genre} </td>

      <td> {song.language} </td>

      <td >

        {favStatus == 0 && 
          <button onClick={AddFavorite}
            className="btn btn-primary">
            Add
          </button>

        }

        {favStatus == 1 && 
          <button onClick={RemoveFavorite}
            className="btn btn-warning">
            Remove
          </button>
        }


        {/* <button onClick={AddFavorite}
        //   className="btn btn-primary">
        //   Add
        // </button>

        // <button onClick={RemoveFavorite}
        //   className="btn btn-warning">
        //   Remove
        // </button> */}

      </td>
    </tr>


  )
}

export default Songs
