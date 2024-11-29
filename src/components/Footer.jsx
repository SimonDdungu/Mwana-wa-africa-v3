import './Footer.css'
import Logo from '../images/Mwana Wa Africa Logo circle.png'
import Facebook from '../images/icons/Facebook.png'
import Twitter from '../images/icons/Twitter.png'
import Instagram from '../images/icons/Instagram.png'
import Youtube from '../images/icons/Youtube.png'


function Footer(){
return <section className="footer">
    <div className="footer_container container">

        <div className="Footer_Logo">
            <img src={Logo} alt="Mwana Wa Africa Logo" />
            <div>
                <p> Give hope to the hopeless and meet their practical needs.</p>
                <p>DISCIPLESHIP | HOPE | COMPASSION</p>
            </div>
        </div>

        <div className="Footer_Links">
            <span><strong>Useful Links</strong></span>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Donate</a></li>
            </ul>
        </div>


        <div className="Footer_Contact">
            <span className='head'><strong>Reach Us On</strong></span>
            <ul>
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    <span>Mwana-wa-africa-childrens-ministry@gmail.com</span>
                                       
                </li>
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <span>+256 761 524 613 | +256 759 085 245</span>
                </li>
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Semuto, Nakaseke</span>
                </li>
            </ul>
        </div>

        <div className="Footer_Socials">
            <span><strong>Follow us on Social Media</strong></span>
            <ul>
                <li>
                    <img src={Facebook} alt="Facebook Logo" />
                </li>
                <li>
                    <img src={Twitter} alt="Twitter Logo" />
                </li>
                <li>
                    <img src={Youtube} alt="Youtube Logo" />
                </li>
                <li>
                    <img src={Instagram} alt="Instagram Logo" />
                </li>
            </ul>
        </div>

    </div>

</section>
}
export default Footer;