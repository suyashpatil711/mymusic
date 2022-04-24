import { useLocation } from 'react-router'
import { URL } from '../../../config'
import Songs from './Songs'
import './SongsList.css'
import { useNavigate } from 'react-router'
import WelcomeBar from '../../../components/WelcomeBar'
import SearchBar from '../../../components/searchBar'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AlbumSongsList = (props) => {
   const navigate = useNavigate()
  const location = useLocation()
  const songs1 = location.state.songs
  const [songs, setSongs] = useState([])
  const albumId = location.state.albumid
  const userId = sessionStorage['id']
  
  const getSongs = () => {
    setSongs(songs1)
  }

  const getSongsOfSelectedAlbum = () => {
    const url =`${URL}/album/${albumId}/${userId}`
    // send the GET request
    axios.get(url).then((response) => {
      const result = response.data
      console.log(result)
    
      if (result.status === 'success') {
        // navigate('/songs-list',{state: {
        //   songs: result.data,
        //   title: album.albumName,
        //   thumbnail: album.albumUrl,
        // }})
       setSongs(result.data)
      } else {
        console.log(result.error)
        alert('error occured while getting all album')
      }
    })
  }
  useEffect(() => {
    getSongsOfSelectedAlbum()
    //getArtists()
  }, [])
  return (
   <div>
        <div class="imageBack">
          <h1 className="homepage">MyMusic.com</h1> 
          <WelcomeBar/>                   
          <div className="row" style={{ marginTop: '20px' }}>
            <div id="searchBar"  >
              <SearchBar /> 
            </div>
          </div>
        </div>

    <div className="songs-list-container">
      <div className="row">
        <div className="col-2">
          <img
            className="thumbnail"
            src={location.state.thumbnail}
            alt=""
          />
        </div>
        <div className="col">
          <h3 className="title">{location.state.title}</h3>
          <div>Created by Mymusic</div>
        </div>
      </div>
       
      <div class="container">
    <div class="row">
        <div class="col-md-12 bg-light text-right">
            
            <button type="button" 
            
            onClick={() => {
              // go to blog detail along with the blog id
              navigate('/favorite-song-list')
            }}
            className="btn btn-link"

            class="btn btn-info float-end">All Favorite Songs</button>
        </div>
    </div>
</div>

      <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Song Name</th>
              <th scope="col">gnere</th>
              <th scope="col">lamguage</th>
              <th scope="col">FavStatus</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => {
              return <Songs song={song} index={index} />
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default AlbumSongsList
