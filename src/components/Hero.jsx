import './Hero.css'
import Hero_Image from '../images/Mwana-3.jpeg'
import sunflower from '../images/icons/sunflower.png'
import boy from '../images/icons/boy.png'
import volunteer from '../images/icons/volunteer.png'

function Hero(){
return <section className="Hero_section">
    
            <div className="Hero_container container">
                <div className="Hero_Text">
                    <h1>Small Acts,<br />Big Impact</h1>
                    <p>Your contribution can provide education, healthcare, and a brighter future to those who need it the most. Together, we can create change.</p>

                    <div className="Hero_buttons">
                        <a href="" className="Hero_GetInvolved">Get Involved</a>
                        <a href="" className="Hero_LearnMore">Learn More</a>
                    </div>
                </div>

                


                <div className="Hero_Image">


                    <div className="Hero_floating_cards">
                    <img src={boy} alt="boy icon png" />
                        <div className="inner_Hero_float_text">
                            <span>Change Lives Today</span> 
                            <p>Your generosity provides food, shelter, and education to those in need</p>
                        </div>
                    </div>



                    <div className="Hero_floating_cards">
                        <img src={sunflower} alt="sun flower icon" />
                        <div className="inner_Hero_float_text">
                            <span>Inspire Hope</span>
                            <p>Your support helps us reach more people in need</p>
                        </div>
                        
                        </div>

                    <div className="Hero_floating_cards">
                        <img src={volunteer} alt="holding hands forming a square" />
                        <div className="inner_Hero_float_text">
                            <span>Be a Volunteer</span>
                            <p>Lend your time and skills to support our mission</p>
                        </div>
                            
                        
                    </div>



                    <img src={Hero_Image} alt="Landing page image, Children laughing" />

                </div>
            </div>
        </section>

}


export default Hero;