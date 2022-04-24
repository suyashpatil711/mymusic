import './navbar.css'
import { useNavigate } from 'react-router'
import LogoutUser from '../pages/logout'
import { Link } from 'react-router-dom'

const Navbar = () =>{


    const navigate = useNavigate()

    const name = sessionStorage.getItem("firstName")

    return(
        <div>
          <div class="mystyle">
          {/* <img src="https://a10.gaanacdn.com/gn_img/albums/koMWQ7BKqL/oMWQYN8XWq/size_l.webp"className="img-fluid img-thumbnail" alt="movie poster" width={85} />   */}
            
          </div>
      <div className="navigation-bar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            Admin Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/artist">
                  Artists
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/admin">
                  Albums
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/all-songs">
                  All Songs
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/user">
                  Users
                </Link>
              </li>

            </ul>
          </div>
 
          

        </div>
      </nav>
      </div>
    </div> 

    )
}

export default Navbar;