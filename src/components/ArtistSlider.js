import './HorizontalSlider.css'
import { URL } from '../config'

const ArtistSlider = ({ items, title, onItemSelect }) => {
  
  console.log(" its my items "+items)
  return (
    <div className="slider-container">
      <div className="title">{title}</div>

      {items.map((item) => {
        return (
          <div
            className="item-container"
            onClick={() => {
              onItemSelect(item)
            }}>
            <img src={item.artistUrl} className="image" />
            <div className="item-title">{item.artistName}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ArtistSlider
