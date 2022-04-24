import './admin.css'
import './addSongByAlbumId.css'
import Navbar from '../../components/navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { URL } from '../../config'
import WelcomeBar from '../../components/WelcomeBar'
import UploadFiles from '../../components/upload-files-component'
import ApiService from './UploadClass'
import UploadFile from './UploadClass'
import React from 'react';
const AddSongByAlbumId = () =>{
     
    const { state } = useLocation()

    const {album} = state
    const [selectedFile, setSelectedFile] = React.useState(null);

    const navigate = useNavigate()

    const [songName, setSongName] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setlanguage] = useState('')
    const [songUrl, setSongUrl] = useState('')
    const [songTrack, setSongTrack] = useState('')

    // const { album } = state
    // const (album.albumId) = albumId

    const addSongToDB = () =>{
        // const { albumId} = state
       // const songId = 10
        if(songName.length == 0){
            toast.warning('please Song Name')
        } else if (genre.length == 0){
            toast.warning('please enter genre')
        }else if(language.length == 0){
            toast.warning('please enter Language')
        }else if(songUrl.length == 0){
            toast.warning('please enter songUrl')
        }else if(songTrack.length == 0){
          toast.warning('please enter songTrack')
      }
        else{
             const body = {
                 //songId,
                 songName,
                 genre,
                 albumId: album.albumId,
                 language,
                 songUrl,
                 songTrack
             }

             const url = `${URL}/add/song`

             axios.post(url, body).then((response) => {

                // get the server result
                 const result = response.data
                 if (result['status'] == 'success'){
                   toast.success('added new song')
                    navigate('/all-songs')
                 }else {
                   toast.error(result['error'])
                 }
             })
        }

   }
    
   const onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
        selectedFile: e.target.files[0]
    });
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    ApiService.upload(formData)
        .then(res => {
                console.log(res.data);
                alert("File uploaded successfully.")
        })
};
    
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      const response = axios({
        method: "post",
        url: "http://localhost:8080/upload/",
        body: formData,
       // headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  const uploadFile = ({ target: { files } }) =>{
    console.log( files[0] )
    let data = new FormData();
    data.append( 'file', files[0] )

    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( (loaded * 100) / total )
        console.log( `${loaded}kb of ${total}kb | ${percent}%` );

        if( percent < 100 ){
          this.setState({ uploadPercentage: percent })
        }
      }
    }
const url=`${URL}/upload`
    axios.post(url, data, options).then(res => { 
        console.log(res)
        this.setState({ avatar: res.data.url, uploadPercentage: 100 }, ()=>{
          setTimeout(() => {
            this.setState({ uploadPercentage: 0 })
          }, 1000);
        })
    })
  }
    return (
    <div>  
    
    
      <div class="imageBack">
      <h1 className="homepage">MyMusic.com</h1> 
      <WelcomeBar/>                   
    </div>
        
      <div>
        <Navbar />
      </div>
      <div className = "add-song">
      <h3 className="page-title">{album.albumName}</h3>
      <br></br>
      <div className="row"> 
        <div className="col">    
          {<img src={album.albumUrl} className="img-fluid img-thumbnail" alt="movie poster" width={120} />}
        </div>

        <div className="col-10">
          <div className="mb-3">
            <label htmlFor="">Song Name</label>
            <input
              onChange={(e) => {
                 setSongName(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="">genre</label>
            <input
              onChange={(e) => {
                setGenre(e.target.value)
              }}
              type="text"
              className="form-control"
            />
          </div> */}

     
    

    

          {/* <div className="mb-3">
        <label htmlFor="">Language</label>
        <input
          onChange={(e) => {
             setlanguage(e.target.value)
          }}
          type="text"
          className="form-control"     
       />
      </div> */}

          <div className="mb-3">
            <label htmlFor="">Song URL</label>
            <input
              onChange={(e) => {
                setSongUrl(e.target.value)
              }}
              // accept=".jpg/.jpeg/.png"
              //  type="file"
               className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Song Track</label>
            <input
              onChange={(e) => {
                setSongTrack(e.target.value)
              }}
              // accept="audio/*"
              //  type="file"
               className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Genre
            <br/>
            <input  list="genre" name="genre"  onChange={(e) => {
                setGenre(e.target.value)
              }}/>
              
            </label>
           
            <datalist id="genre">
                <option value = "romantic"></option>
                <option value = "Rock"></option>
                <option value = "classical"></option>
                <option value = "other"></option>
            </datalist>
          
          </div>

          <div className="mb-3">
            <label htmlFor="">Language
            <br/>
            <input  list="language" name="language"  onChange={(e) => {
                setlanguage(e.target.value)
              }}/>
              
            </label>
           
            <datalist id="language">
                <option value = "Marathi"></option>
                <option value = "Hindi"></option>
                <option value = "English"></option>
                <option value = "Kannada"></option>
                <option value = "other"></option>

            </datalist>
          
          </div>
          <div className="mb-3">
          <UploadFile/>
          </div>
          <div className="mb-3">
            <button
             onClick={addSongToDB} className="btn btn-success">
              Save
            </button>

            <Link to="/admin">
              <a className="btn btn-warning float-end">cancel</a>
            </Link>
          </div>
        </div>
      </div>
     </div>  
    </div>        
          
      )
}
export default AddSongByAlbumId