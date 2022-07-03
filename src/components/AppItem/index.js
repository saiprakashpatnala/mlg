import './index.css'

const AppItem = props => {
  const {ad} = props
  const {imageUrl, imageAltText} = ad
  return (
    <li className="app-li">
      <img src={imageUrl} alt={imageAltText} className="ima" />
    </li>
  )
}

export default AppItem
