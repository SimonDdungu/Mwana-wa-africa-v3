import './VolunteerBanner.css'
import Mwana_2 from '../images/Mwana 2.jpeg'

function VolunteerBanner(){
    return (
        <section className="VolunteerBanner">
    
            <div className="Volunteer_content container">
                    <div className="Volunteer_Image">
                        <img src={Mwana_2} alt="Co-founder teaching" />
                    </div>
    
                    <div className="Volunteer_Text">

                            <div className="V_Headings">
                                <h5 className="Small-heading">Join Our Cause</h5>
                                <h2 className="Big-heading">Become A <span className="v_underline">Volunteer</span></h2>
                                <p>As a volunteer with Mwana wa Africa, you'll be part of a compassionate community dedicated to giving hope and meeting practical needs. Your time and skills can create lasting change.
                                Ready to help? Join us today and be the change!</p>
                            </div>
                        {/*
                            <form className="Volunteer_Details">
                                <input type="text" placeholder="Enter name" required/>
                                <input type="email" placeholder="Enter email" required/>
                                
                                <button type="submit" className="V_JoinUs">Join us</button>
                            </form>
                        */}
                            
                            <button type="submit" className="V_JoinUs">Join us</button>
                    </div>

    
            </div>
            
    
        </section>
    );
    }
    export default VolunteerBanner;
    