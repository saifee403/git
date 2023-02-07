import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faTrain } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Room</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Rent a Car</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTrain} />
        <span>Train</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flight</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Taxi</span>
        </div>
      </div>
      <h1 className="headerTitle">Travel through Pakistan</h1>
      <p className="headerDesc">Save big on your intercity travel by availing massive discounts on bus and domestic flight tickets. With teamTravel, you can browse through hundreds of bus operators and airlines to find the most affordable option for yourself.</p>
      <button className="headerBtn">Sign In / Register</button>
      <div className="headerSearch">
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon" />
        <input type="text"
        placeholder="Where are you going"
        className="headerSearchInput"
        />
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span className="headerSearchText">Date to Date</span>
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span className="headerSearchText">2 adults 1 Children 1 Room</span>
        </div>
        <div className="headerSearchItem">
        <button className="headerBtn">Search</button>
        </div>
      </div>        
      </div>
    </div>
  )
}

export default Header
