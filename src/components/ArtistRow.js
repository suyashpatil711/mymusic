//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import Admin from "../pages/Admin/admin"
import { toast } from "react-toastify"



const ArtistRow = (props) => {
  const { artist } = props
  const navigate = useNavigate()

  const confirmDelete = () => {
    var opt= window.confirm("Are you sure you want to delete artist ?");
    if(opt){
      navigate('/delete-artist',{ state: {id: artist.artistId} })
    }
    else{
      toast.warning("delete operation cancelled!")

      return false;
}
}


  return (
    <tr>
       <td>{artist.artistId}</td>
     
       <td><img src={artist.artistUrl} className="img-fluid img-thumbnail" alt="movie poster" width={85} /></td>

      <td>{artist.artistName}</td>
      
      <td>
        <button
          onClick={() => {
           
            navigate('/add-songs-to-artist', { state: {artist: artist } })
          }}
          className="btn btn-success btn-sm">
          Add Track
        </button>
       
        {/* <button   onClick={() => {
            
            navigate('/delete-artist',{ state: {id: artist.artistId} })
          }}      
        className="btn btn-danger float-end">
            delete
          </button> */}

      <button   onClick={confirmDelete} 
        className="btn btn-danger float-end">
            delete
          </button>


      </td>
    </tr>
  )
}

export default ArtistRow
