// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoriesDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoriesDetails

  return (
    <li className="repository-item">
      <img className="repository-image" src={imageUrl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="stars-container">
        <img
          className="start-icon"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="stars-text">{starsCount} stars</p>
      </div>
      <div className="stars-container">
        <img
          className="start-icon"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="stars-text">{forksCount} forks</p>
      </div>
      <div className="stars-container">
        <img
          className="start-icon"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p className="stars-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
