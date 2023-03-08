// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-card-container">
      <img src={imgUrl} alt={name} className="img" />
      <p className="title">{name}</p>
    </li>
  )
}

export default DestinationItem
