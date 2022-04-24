import { useLocation } from "react-router"
import SearchBar from "../../../components/searchBar"
import WelcomeBar from "../../../components/WelcomeBar"
import '../HomeCss/favorite.css'
import { URL } from "../../../config"

const SongSearch = () => {

    const location = useLocation()
  const songs = location.state.songs

  const audiourl = URL + "/audio/" + songs.songTrack

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

            <div className="row">
                <div className="col-2">
                    <img
                        className="thumbnail"
                        src={songs.songUrl}
                        alt=""
                    />
                </div>
                <div className="col">
                    <h3 className="title">{ songs.songName}</h3>                  
                    <div> {songs.genre} song </div>
                    <div>Language :  {songs.language} </div>

                    <br></br>
                    <div> <audio style={{ marginLeft: '30px' }} src={audiourl} controls /></div>
                </div>
            </div>

            {/* <td>{album.albumId}</td> */}
        </div>
    )
}
export default SongSearch