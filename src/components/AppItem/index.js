// Write your code here
import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {appName, imageUrl} = appsDetails

  return (
    <li className="list-item-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
