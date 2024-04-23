// Write your code here
import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  const altName = `planet ${name}`

  return (
    <div>
      <img src={imageUrl} alt={altName} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
