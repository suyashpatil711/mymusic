
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/signup';
import LogoutUser from './pages/logout';
import Home from './pages/Client/Home/home';
import Admin from './pages/Admin/admin';
import Artist from './pages/Artist/artist';
import AlbumRow from './components/AlbumRow';
import User from './pages/User/user';
import AddAlbum from './pages/Admin/addAlbum';
import Addrtist from './pages/Artist/addArtist';
import DeleteAlbum from './pages/Admin/deleteAlbum';
import DeleteArtist from './pages/Artist/deleteArtist';
import DeleteUser from './pages/User/deleteUser';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AllSongs from './pages/Song/song';
import DeleteSong from './pages/Song/deleteSong';
import AddSongByAlbumId from './pages/Admin/addSongByAlbumId';
import AlbumSongsList from './pages/Client/Home/AlbumSongsList';
import AddSongByArtistId from './pages/Artist/addSongByArtistId';
import FavoriteSongList from './pages/Client/Home/FavoriteSongList';
import SongSearch from './pages/Client/Searching/SongSearch';
import AddFav from './pages/Client/Home/AddFav';


function App() {
  return (
   
    <div className="container">
       
      <BrowserRouter>

        <Routes>         
        <Route exact path="/" element={<Signin />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/logout" element={<LogoutUser />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/albumRow" element={<AlbumRow />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/add-album" element={<AddAlbum />} />
          <Route exact path="/add-artist" element={<Addrtist />} />
          <Route exact path="/delete-album" element={<DeleteAlbum />} />
          <Route exact path="/delete-artist" element={<DeleteArtist />} />
          <Route exact path="/delete-user" element={<DeleteUser />} />
          <Route exact path="/add-songs-to-album" element={<AddSongByAlbumId />} />
          <Route exact path="/add-songs-to-artist" element={<AddSongByArtistId />} />
          <Route exact path="/all-songs" element={<AllSongs />} />
          <Route exact path="/delete-song" element={<DeleteSong />} />
          <Route exact path="/songs-list" element={<AlbumSongsList />} />
          <Route exact path="/favorite-song-list" element={<FavoriteSongList />} />
          <Route exact path="/search-song" element={<SongSearch />} />
          <Route exact path="/Add-FavSong" element={<AddFav />} />
          
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
