import axios from "axios"
import { URL } from "../../../config"
import { useEffect, useState} from "react"
import { toast } from "react-toastify"
import FavoriteSongs from "./FavoriteSongs"
import '../HomeCss/favorite.css'
import WelcomeBar from "../../../components/WelcomeBar"
import SearchBar from "../../../components/searchBar"

const FavoriteSongList = () => {
   
      const [favoriteSongs, setFavoriteSongs] = useState([])
      const userId  = sessionStorage['id']

    const favSongs = () => {
        const url = `${URL}/song/fav/${userId}`
        axios.get(url).then((response) => {
          const result = response.data
          console.log(result)
          if (result['status'] == 'success') {
            setFavoriteSongs(result['data'])
          } else {
            toast.error(result['error'])
          }
        })
      }

      useEffect(() => {
        favSongs()
        console.log('getting called')
      }, [])
 
    return(
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

       <h2 class="favorite">My favorite Songs</h2>
     
       <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Song Name</th>
              <th>gnere</th>
              <th>lamguage</th>
             
            </tr>
          </thead>
          <tbody>
            {favoriteSongs.map((favoriteSong, index) => {
              return <FavoriteSongs favoriteSong={favoriteSong} index={index} />
            })}
          </tbody>
        </table>
      </div>
    </div> 
   )
}

export default FavoriteSongList