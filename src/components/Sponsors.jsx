import './Sponsors.css'
import Airtel_Logo from '../images/Sponsors/Airtel Logo.png'
import Absa_Logo from '../images/Sponsors/Absa logo.png'
import Jubilee_Logo from '../images/Sponsors/Jubilee logo.png'
import MTN_Logo from '../images/Sponsors/mtn logo.jpg'
import Nssf_Logo from '../images/Sponsors/Nssf logo.png'
function Sponsors(){
    return <section className="Sponsors">
                <div className="Sponsors_container container">
                    <div className='Sponsors_heading'><strong>Our Trusted Partners</strong></div>
                    <div className="Sponsors_slide">
                        <img src={Airtel_Logo} alt="Airtel Logo" />
                        <img src={Absa_Logo} alt="Absa Logo" />
                        <img src={Nssf_Logo} alt="Nssf Logo" />
                        <img src={Jubilee_Logo} alt="Jubilee Logo" />
                        <img src={MTN_Logo} alt="MTN Logo" />
                    </div>
                </div>
            </section>
}
export default Sponsors;