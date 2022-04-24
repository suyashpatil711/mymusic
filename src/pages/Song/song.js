import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import Navbar from '../../components/navbar'
import SongsRow from '../../components/SongsRow'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './song.css'
import WelcomeBar from '../../components/WelcomeBar'

const AllSongs = () =>{
    
    const navigate = useNavigate()


    const [songs, setSongs] = useState([])

     const getSongs= () =>{
           const url = `${URL}/song/All`

           axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
              setSongs(result['data'])
            } else {
              toast.error(result['error'])
            }
          })
     }
      
     useEffect(() => {
        getSongs()
        console.log('getting called')
      }, [])

    return(
      <div>
      <div class="imageBack">
      <h1 className="homepage">MyMusic.com</h1> 
      <WelcomeBar/>                   
    </div>
   
      <div className="col">
            <div>
              <Navbar />
            </div>
      <div >
          <h2 class="title">Songs</h2>
      </div>
      <br></br>
      <br></br>
      <div >

      <table className="table table-image">
            <thead >
              <tr>
                <th scope="col">Song Id</th>
                {/* <th scope="col">Song Url</th> */}
                <th scope="col">Song Name</th>
                <th scope="col">Gnere</th>
                <th scope="col">Language</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {songs.map((item) => {
                    return <SongsRow song={item} />
                    })}
                
            </tbody>
          </table>
          </div>

      {/* <table className="table table-striped">
<thead>
  <tr>
    <th>id</th>
    <th>ArtistURL</th>
     <th>Name</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
{/* {songs.map((item) => {
    return <SongsRow song={item} />
  })} */}
{/* </tbody>
</table> */} */
      </div>
    </div> 
  
    )
}

export default AllSongs