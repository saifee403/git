import './searchItem.css'

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src="https://insights.ehotelier.com/wp-content/uploads/sites/6/2020/01/hotel-room-300x300.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Johar Town Appartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTexiOp">free airport taxi</span>
            <span className="siSubtitle">
                Studio appartment with air conditioning
            </span>
            <span className="siFeatures">Entire studio - 1 bathroom  21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel leter so lock in this great price today</span>
        </div>
        <div className="siDetails">details</div>
    </div>
  )
}

export default SearchItem
