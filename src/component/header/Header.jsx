import "./header.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faTrain } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({type}) {
  const [openDate, setopenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [destination, setDestination] = useState("")
  const [openOptions, setopenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
  });

  const navigate = useNavigate()
  const handleOption = (name, operation)=>{
    setOptions((prev) => {
      return{
        ...prev, 
        [name]: operation === "i" ? options[name] +1 : options[name] -1,
      }
    })
  }

  const handleSearch = () =>{
    navigate("/hotels", { state: {destination, date, options} });
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        { type !== "list" &&
          <><h1 className="headerTitle">Travel through Pakistan</h1>
        <p className="headerDesc">Save big on your intercity travel by availing massive discounts on bus and domestic flight tickets. With teamTravel, you can browse through hundreds of bus operators and airlines to find the most affordable option for yourself.</p>
        <button className="headerBtn">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text"
              placeholder="Where are you going"
              className="headerSearchInput"
              onChange={e=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setopenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
              minDate={new Date()}
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setopenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult ' ${options.children} children ' ${options.room} room`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.adult <= 1} onClick={()=>handleOption("adult", "d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                </div>

              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.children <= 0} onClick={()=>handleOption("children", "d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" disabled={options.room <= 1} onClick={()=>handleOption("room", "d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  )
}

export default Header
