import { useNavigate } from 'react-router'
import SearchBar from '../../../components/searchBar'
import WelcomeBar from '../../../components/WelcomeBar'
import { Navigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import AlbumSlider from '../../../components/AlbumSlider'
import ArtistSlider from '../../../components/ArtistSlider'
import '../HomeCss/favorite.css' 
 


const Home = () =>{
    
    const { id, firstName, lastName } = sessionStorage
    const userId = sessionStorage['id']
    const navigate = useNavigate()
    
    const [artists, setArtists] = useState([])
     const [albums, setAlbums] = useState([])
     var [startIndex, setStartIndex] = useState(0)
     var [endIndex, setEndIndex] = useState(3)
    useEffect(() => {
      getAlbums()
      getArtists()
    }, [])


  
    const getAlbums = () => {
      const url = `${URL}/admin/album/All`
      // send the GET request
      axios.get(url).then((response) => {
        const result = response.data
        console.log(result)
        if (result.status === 'success') {
          setAlbums(result.data)
        } else {
          toast('error occured while getting all albums')
        }
      })
    }
  
    const getArtists = () => {
      const url = `${URL}/admin/artist/All`
      // send the GET request
      axios.get(url).then((response) => {
        const result = response.data
        console.log(result)
        if (result.status === 'success') {
          setArtists(result.data)
        } 
        else {
          alert('error occured while getting all artists')
        }
         console.log("  artist "+artists)
        debugger
      })
    }
   
     
    const getSongsOfSelectedAlbum = (album) => {
      const url =`${URL}/album/${album.albumId}/${userId}`
      // send the GET request
      axios.get(url).then((response) => {
        const result = response.data
        console.log(result)
      
        if (result.status === 'success') {
          navigate('/songs-list',{state: {
            songs: result.data,
            title: album.albumName,
            thumbnail: album.albumUrl,
            albumid: album.albumId,
          }})
        } else {
          console.log(result.error)
          alert('error occured while getting all album')
        }
      })
    }

    const getSongsOfSelectedArtist = (artist) => {
      const url =`${URL}/artist/${artist.artistId}/${userId}`
      // send the GET request
      axios.get(url).then((response) => {
        const result = response.data
        console.log(result)
        
        if (result.status === 'success') {
          navigate('/songs-list',{state: {
            songs: result.data,
            title: artist.artistName,
            thumbnail: artist.artistUrl,
            
          }})
        } else {
          console.log(result.error)
          alert('error occured while getting all album')
        }
      })
    }
    const increaseCounter=()=>{
      if((albums.length-3)-startIndex!=0){
      setStartIndex(startIndex+=1)
      setEndIndex(endIndex+=1)
      }
    }
    const decreaseCounter=()=>{
      if(startIndex !=0){
      setStartIndex(startIndex-=1)
      setEndIndex(endIndex-=1)
      }
    }
   // let startIndex = 0
 // let endIndex = 3

  let subset = albums.slice(startIndex, endIndex)

    return (
      
      <div>
        <div class="imageBack">
          <h1 className="homepage">MyMusic.com</h1> 
          <WelcomeBar/>                   
          <div className="row" style={{ marginTop: '40px' }}>
            <div id="searchBar"  >
              <SearchBar /> 
            </div>
          </div>
        </div>

          <div>
            <table>
              <tr>
                <td><button onClick={()=>{
                  decreaseCounter()
                }}>Prev</button></td>
                <td>
                <AlbumSlider
                  onItemSelect={getSongsOfSelectedAlbum}
                  items={subset}
                  title="Featured Albums"
                  />
                </td>
                <td><button onClick={()=>{
                  increaseCounter()
                }}>Next</button></td>
              </tr>
            </table>
      
      
      
      <ArtistSlider
        onItemSelect={getSongsOfSelectedArtist}
        items={artists}
        title="Featured Artist"
      />
    </div>
    
        </div>
      )
    }


export default Home;