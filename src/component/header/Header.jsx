import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Stay</span>
        </div>
      </div>
    </div>
  )
}

export default Header
