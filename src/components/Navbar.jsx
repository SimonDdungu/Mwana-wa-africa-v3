import './Navbar.css'
import Logo from '../images/Mwana Wa Africa Logo circle.png'


function Navbar(){
return <header className="Navigation_Bar">
            <div className="Nav_Logo">
                <img src={Logo} alt="Mwana Wa Africa Logo" />
            </div>

            <ul className="Nav_items">
                <li className="Nav_links"><a href="#">Home</a></li>
                <li className="Nav_links"><a href="#">About Us</a></li>
                <li className="Nav_links"><a href="#">Services</a></li>
                <li className="Nav_links"><a href="#">Gallery</a></li>
                <li className="Nav_links"><a href="#">Contact us</a></li>
            </ul>

            <div className="Nav_Donate">
                <a href="#">Donate</a>
            </div>

        </header>
}
export default Navbar;