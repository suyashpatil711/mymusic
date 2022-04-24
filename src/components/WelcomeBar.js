import { useNavigate } from "react-router"
const WelcomeBar = () =>{
  
    const navigate = useNavigate()
    const firstName = sessionStorage['firstName']

    return (

        <div className="row">
        <div className="col">
          
        </div>

        <div className="col">
          <div className="float-end">
            <div className="btn-group " role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Welcome {firstName}
              </button>

              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">                   
                <li>
                <button  onClick={() => {        
                                         navigate('/logout')
                             }} 
                             className="dropdown-item">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>    

    )
}

export default WelcomeBar