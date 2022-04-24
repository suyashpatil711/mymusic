import { useNavigate } from "react-router"
import { useEffect } from "react";



const LogoutUser = () => {

    const navigate = useNavigate();

    const logoutUser = () => {
   
       // remove the logged users details from session storage
       sessionStorage.removeItem('id')
       sessionStorage.removeItem('firstName')
       sessionStorage.removeItem('lastName')
       sessionStorage.removeItem('loginStatus')
   
       // navigate to sign in component
       navigate('/signin')
     }
   
     useEffect(() => {
        logoutUser()
      
      }, [])

}
  export default LogoutUser