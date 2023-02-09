import './hotel.css'
import Navbar from "../../component/navbar/Navbar"
import Header from "../../component/header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Hotel() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },

  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Days Inn Hotel</h1>
          <div className="hetelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Johar Town Phase 2 Lahore</span>
          </div>
          <span className="hotelDistance">
            Excellent Location 600m from Center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $25 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <p className="hotelDesc">
                Situated in Lahore, 32 km from Wagah Border, Shelton Residency features air-conditioned rooms with free WiFi and concierge services. The property is set 3.8 km from Gaddafi Stadium, 4.6 km from Packages Mall and 6.6 km from Nairang Galleries. There is a restaurant serving Chinese cuisine, and free private parking is available.

                The rooms in the guest house are fitted with a flat-screen TV with satellite channels. At Shelton Residency rooms have bed linen and towels.

                A buffet, à la carte or continental breakfast can be enjoyed at the property.

                Speaking English, Punjabi and Urdu, staff are ready to help around the clock at the reception.
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 3 Nights</h1>
              <span>Situated in Lahore, 32 km from Wagah Border excellent location with 4.6 Rating</span>
              <h2><b>$70</b>(3 Nights)</h2>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
