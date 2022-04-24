//import { url } from '../common/constants'
//import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const UserRow = (props) => {
  const { users } = props
  const navigate = useNavigate()

  const confirmDelete = () => {
    var opt= window.confirm("Are you sure you want to delete user ?");
    if(opt){
      navigate('/delete-user', { state: {id: users.id} })
    }
    else{
      toast.warning("delete operation cancelled!")
      return false;
}
}


  return (
    <tr>
       <td>{users.id}</td>
       <td>{users.firstName+"  "+users.lastName}</td>
       <td>{users.email}</td>
       <td>{users.mobileNo}</td>
       <td>
        {/* <button
          onClick={() => {  
            navigate('/delete-user', { state: {id: users.id} })
          }}
          className="btn btn-danger">
          Remove
        </button> */}

        <button
          onClick={confirmDelete}
          className="btn btn-danger">
          Remove
        </button>


      </td>
    </tr>
  )
}

export default UserRow
