import './OurWork.css'
import Mwana_1 from '../images/Child 4.jpg'
import Pin from '../images/icons/circle.png'

function OurWork(){
    return <section className="Our_Work">
        <h3> WHO ARE WE?</h3>
        <span className='container'>Mwana Wa Africa Children's Ministry (MWACM) is a compassionate charity organization committed to giving hope to the hopeless. We work to meet the practical needs of vulnerable individuals and communities, empowering them to create brighter futures through support, care and sustainable solutions.</span>
                <div className="Our_Work_container container">
                    
                    <div className="Our_Work_Text">
                        <img src={Pin} alt="Pin image" />
                        <div className='Our_Work_heading'><strong>Our Mission</strong></div>
                        <p>At Mwana wa Africa, our mission is to give hope to the hopeless and meet their practical needs. We are dedicated to uplifting vulnerable communities by providing essential resources, creating opportunities, and empowering individuals to build brighter futures. Through compassion, action, and support, we strive to restore dignity and bring lasting change to those in need across Africa. Together, we can make hope a reality.</p>
                    </div>
                    <div className="Our_Work_Image">
                        <img src={Mwana_1} alt="Founder of Mwana Wa Africa teaching children" />
                    </div>
                </div>
            </section>
}
export default OurWork;