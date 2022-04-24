// import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import AlbumRow from '../../components/AlbumRow'
import Navbar from '../../components/navbar'
import './admin.css'
import WelcomeBar from '../../components/WelcomeBar'

const Admin = () =>{
  
    // const navigate = useNavigate()


    const [albums, setAlbums] = useState([])

     // console.log("it is state")
      
    const getAlbum= () =>{
        const url = `${URL}/album/All`

        axios.get(url).then((response) => {
         const result = response.data
         //console.log("result")
         console.log(result)
        // console.log(typeof(result))
        // if (result['status'] == 'success') {
          if (result != null){
           setAlbums(result.data)
         } else {
           toast.error(result['error'])
         }
       })
  }
      
  
  useEffect(() => {   
    getAlbum()
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
                  <h2 class="title">Album</h2>

                  <Link to="/add-album">
                  <a  className="btn btn-success">Add Album</a>
                   </Link>
              </div>
              <br></br>
              <br></br>
              <div >
              <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>AlbumURL</th>
             <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {albums.map((item) => {
            return <AlbumRow album={item} />
          })}
        </tbody>
      </table>
    </div>
   </div> 
   </div>         
    )
}
export default Admin;