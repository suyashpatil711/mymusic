import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import Navbar from '../../components/navbar'
import ArtistRow from '../../components/ArtistRow'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './artist.css'
import WelcomeBar from '../../components/WelcomeBar'

const Artist = () =>{
    
    const navigate = useNavigate()


    const [artists, setArtist] = useState([])

     const getArtist= () =>{
           const url = `${URL}/artist/All`

           axios.get(url).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
              setArtist(result['data'])
            } else {
              toast.error(result['error'])
            }
          })
     }
      
     useEffect(() => {
        getArtist()
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
          <h2 class="title">Artist</h2>

          <Link to="/add-artist">
          <a  className="btn btn-success">Add Artist</a>
           </Link>
      </div>
      <br></br>
      <br></br>
      <div >
      <table className="table table-striped">
<thead>
  <tr>
    <th>id</th>
    <th>ArtistURL</th>
     <th>Name</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
{artists.map((item) => {
    return <ArtistRow artist={item} />
  })}
</tbody>
</table>
      </div>
    </div> 
    </div> 
    )
}

export default Artist