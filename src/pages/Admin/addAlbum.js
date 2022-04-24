import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import Navbar from '../../components/navbar'
import Admin from './admin'
import { toast } from 'react-toastify'
import WelcomeBar from '../../components/WelcomeBar'

const AddAlbum = () => {
        
    const [albumName, setAlbumName] = useState('')
    const [albumUrl, setAlbumUrl] = useState('')

    const navigate = useNavigate()
  
    const addAlbumToDB = () =>{
        // const albumId = 6

         if(albumName.length == 0){
             toast.warning('please enter title')
         } else if (albumUrl.length == 0){
             toast.warning('please enter thubnail')
         }else{
              const body = {
                  
                  albumName,
                  albumUrl,
                //  albumId,
              }

              const url = `${URL}/add/album`

              axios.post(url, body).then((response) => {

                 // get the server result
                  const result = response.data
                  if (result['status'] == 'success'){
                    toast.success('added new album')
                     navigate('/admin')
                  }else {
                    toast.error(result['error'])
                  }
              })
         }

    }

    return (
     <div>
      <div class="imageBack">
          <h1 className="homepage">MyMusic.com</h1> 
          <WelcomeBar/>                   
        </div>
        
    <div className="col">
        <div>
        <Navbar />
        </div>
          <h2 class = "title">Add Album</h2>
          
          <div className="mb-3">
        <label htmlFor="" className="label-control">Title</label>
        <input
          onChange={(e) => {
            setAlbumName(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">Thumbnail</label>
        <input
          onChange={(e) => {
            setAlbumUrl(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
          <button onClick={addAlbumToDB} className="btn btn-success">
            Save
          </button>
          <Link to="/admin" className="btn btn-danger float-end">
            Cancel
          </Link>
        </div>
        </div>
    </div>     
    )
}

export default AddAlbum