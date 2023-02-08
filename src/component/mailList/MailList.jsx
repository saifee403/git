import "./mailList.css"

function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Be the first to recieve our best discounts</h1>
        <span className="mailDesc">Subscribe to our newsletter</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Enter Your Email"/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default MailList
