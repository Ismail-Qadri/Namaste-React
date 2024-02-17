
import { logo_URL } from "../constants";

const Header=()=>{
  return(
    <div className='header'>
      <div className='logo-design'>
        <img className='logo' src={logo_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;