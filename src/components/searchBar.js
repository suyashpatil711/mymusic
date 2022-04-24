import { useState } from "react";
import axios from "axios";
import { URL } from "../config";
import SongSearch from "../pages/Client/Searching/SongSearch";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


const SearchBar = () => {

  const navigate = useNavigate()

  const songName = 'songName';
  const albumName = 'albumName';
  const artistName = 'artistName';


  const [serachType, setSerachType] = useState('');
  const [sercValue, setSercValue] = useState('');

  const [song, setSong] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");

  const userId = sessionStorage['id']

  return (

    //-------------------------------------------------********---------------------------

    //-------------------------------------------------------------------------------------

    <div>
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
            onChange={(e) => {
              setSercValue(e.target.value)
            }}
          >
          </input>
          <button type="button" className="btn btn-outline-secondary"
            onClick={() => {
              if (serachType == 'songName') {
                const url = "http://localhost:8080/song/details/" + sercValue;
                axios.get(url).then((response) => {
                  const result = response.data;
                  
                  console.log(response.data)
                  console.log(response.data.data)

                 // console.log(result)
                  
                  if (result['status'] == 'success') {
                    setSong(result['data'])
                    toast.success(response.data.data.songName + "  found Successfully")
                    navigate ('/search-song', {state: {
                           songs: response.data.data}})
                    
                  } else {
                    console.log(result['error'])
                  }
                })
              } else if (serachType == 'albumName') {
                const url = "http://localhost:8080/album/details/" + sercValue;
                axios.get(url).then((response) => {
                  const result = response.data;
                  console.log(response.data)
                
                   const albumId = result.data.albumId
                   const albumName = result.data.albumName
                   const albumUrl = result.data.albumUrl
                   
                    console.log(albumId)

                    const url =`${URL}/album/${albumId}/${userId}`
                    // send the GET request
                    axios.get(url).then((response) => {
                      const result = response.data
                      console.log(result)
                      debugger
                      if (result.status === 'success') {
                        navigate('/songs-list',{state: {
                          songs: result.data,
                          title: albumName,
                          thumbnail:albumUrl,
                        }})
                      } else {
                        console.log(result.error)
                        alert('error occured while getting all album')
                      }
                    })
                

                  if (result['status'] == 'success') {
                    setAlbum(result['data'])
                    
                  } else {
                    console.log(result['error'])
                  }
                })
              } else if(serachType == 'artistName'){
                const url = "http://localhost:8080/artist/details/" + sercValue;
                axios.get(url).then((response) => {
                  const result = response.data;
                
                const artistId =  result.data.artistId
                const artistName =  result.data.artistName
                const artistUrl = result.data.artistUrl
               
                  const url =`${URL}/artist/${artistId}/${userId}`
                  // send the GET request
                  axios.get(url).then((response) => {
                    const result = response.data
                    console.log(result)
                    
                    if (result.status === 'success') {
                      toast.success(artistName +" found successfully")
                      navigate('/songs-list',{state: {
                        songs: result.data,
                        title: artistName,
                        thumbnail: artistUrl,
                      }})
                    } else {
                      console.log(result.error)
                      alert('error occured while getting all album')
                    }
                  })

                  if (result['status'] == 'success') {
                    setArtist(result['data'])
                  } else {
                    console.log(result['error'])
                  }
                })
              }else{
                toast.warning("Choose Artis / Album / Song ")
              }
            }}>
            Search
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" onClick={() => {
                setSerachType(songName);
              }}>
                Song
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => {
                setSerachType(albumName);
              }}>
                Album
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => {
                setSerachType(artistName);
              }}>
                Artist
              </button>
            </li>
          </ul>
        </div>

        <div>


          {/* {song.map((item) => {
            return <SongSearch song={item} />
          })} */}
        </div>

        {/* <SongSearch song_detail={song}/> */}

      </div>
      <div>
        {/* <li>
          {song.map((s) => {
            return (
              <li>
                <ul>{s.songId}</ul>
                <ul>{s.sonaName}</ul>
              </li>)
          })};
        </li> */}
      </div>
    </div>
  )

  //88******************************************************

  //   <div>
  //   <div className="input-group">
  //     <input
  //       type="text"
  //       className="form-control"
  //       aria-label="Text input with segmented dropdown button"
  //     ></input>
  //     <button type="button" className="btn btn-outline-secondary">
  //       Search
  //     </button>
  //     <button
  //       type="button"
  //       className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
  //       data-bs-toggle="dropdown"
  //       aria-expanded="false"
  //     >
  //       <span className="visually-hidden">Toggle Dropdown</span>
  //     </button>
  //     <ul className="dropdown-menu dropdown-menu-end">
  //       <li>
  //         <a className="dropdown-item" href="#">
  //           Album
  //         </a>
  //       </li>
  //       <li>
  //         <a className="dropdown-item" href="#">
  //           Artist
  //         </a>
  //       </li>
  //       <li>
  //         <a className="dropdown-item" href="/song-search">
  //           Song
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // </div>

}

export default SearchBar
