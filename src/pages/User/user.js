 import { Navigate } from "react-router"
 import { useEffect, useState } from "react"
 import axios from "axios"
 import Navbar from "../../components/navbar"
 import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import UserRow from "../../components/UserRow"
import './user.css'
import WelcomeBar from '../../components/WelcomeBar'

 const User = () =>{

      // const navigate = useNavigate()

    const [users, setAlbums] = useState([])

    // console.log("it is state")

      const getUser= () =>{
            const url = `${URL}/user/All`

            axios.get(url).then((response) => {
                 const result = response.data
                 console.log(result)
           if (result['status'] == 'success') {
          //if (result != null){
           setAlbums(result.data)
         } else {
           toast.error(result['error'])
         }
       })
  }

  useEffect(() => {   
    getUser()
    console.log('getting called')
  }, [])

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
        <div>
          <h2 class="title">Users</h2>
          
          {/* <Link to="/add-album">
                  <a  className="btn btn-success">Add Album</a>
          </Link> */}
          </div>
          <br></br>
              <br></br>
              <div >
              <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
             <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map((item) => {
            return <UserRow users={item} />
          })}
        </tbody>
      </table>
              </div>
         </div>
    </div>
     )
 }

 export default User