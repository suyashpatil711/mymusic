import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import Navbar from '../../components/navbar'
import Artist from './artist'
import { toast } from 'react-toastify'
import WelcomeBar from '../../components/WelcomeBar'

const Addrtist = () => {
        
    const [artistName, setArtistName] = useState('')
    const [artistUrl, setArtistUrl] = useState('')

    const navigate = useNavigate()
  
    const addArtistToDB = () =>{
        // const artistId = 3

         if(artistName.length == 0){
             toast.warning('please enter title')
         } else if (artistUrl.length == 0){
             toast.warning('please enter thubnail')
         }else{
              const body = {
                  
                artistName,
                artistUrl,
                //artistId,
              }

              const url = `${URL}/add/artist`

              axios.post(url, body).then((response) => {

                 // get the server result
                  const result = response.data
                  if (result['status'] == 'success'){
                    toast.success('added new album')
                     navigate('/artist')
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
          <h2 class = "title">Add Artist</h2>
          
          <div className="mb-3">
        <label htmlFor="" className="label-control">Name</label>
        <input
          onChange={(e) => {
            setArtistName(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">Thumbnail</label>
        <input
          onChange={(e) => {
            setArtistUrl(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
          <button onClick={addArtistToDB} className="btn btn-success">
            Save
          </button>
          <Link to="/artist" className="btn btn-danger float-end">
            Cancel
          </Link>
        </div>
        </div>
    </div>     
    )
}

export default Addrtist