import Featured from "../../component/featured/Featured"
import Header from "../../component/header/Header"
import Navbar from "../../component/navbar/Navbar"
import PropertyList from "../../component/propertyList/PropertyList"
import FeaturedProp from "../../component/featuredProperties/FeaturedProp"
import "./home.css"
import MailList from "../../component/mailList/MailList"

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by Type</h1>
        <PropertyList/>
        <div className="homeTitle">Home guest love</div>
        <FeaturedProp/>
        <MailList/>
      </div>
    </div>
  )
}

export default Home
