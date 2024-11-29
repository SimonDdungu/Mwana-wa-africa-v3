import './OurCauses.css'
import Cause1 from '../images/Causes cards (2).jpeg';
import Cause2 from '../images/Causes cards (1).jpeg';
import Cause3 from '../images/Causes cards (3).jpeg';
function OurCauses(){
  return    <section className="Causes">
                <div className="Causes_content container">
                    <h2>Ongoing Campaigns</h2>

                    <div className="CauseCard_container">

                        <div className="CauseEach_card">
                            <div className="image_container">
                                <img src={Cause1} alt="Mwana wa Africa kids from school" />
                            </div>
                            
                            <div className="CauseCard_Text">
                                <h5 className="green_color">Education</h5>
                                <h4>Provide books, resources, and learning opportunities to transform young lives</h4>

                                <div className="Stats">
                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-bullseye"></i>
                                            <p>Target</p>
                                        </div>
                                        <p className="Cause_Goal">$1300</p>
                                    </div>

                                

                                </div>
                            </div>
                            <div className="Progress_container">
                                    <span>86% - Raised</span>
                                    <div className="Progress">
                                        <div className="filled1"></div>
                                    </div>
                            </div>
                        </div>

                        <div className="CauseEach_card">

                            <div className="image_container">
                                <img src={Cause2} alt="Mwana wa Africa kids from school" />
                            </div>

                            
                            <div className="CauseCard_Text">
                                <h5 className="green_color">Food</h5>
                                <h4>Help us put meals on the table for struggling families, bringing relief and hope</h4>

                                <div className="Stats">
                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-bullseye"></i>
                                            <p>Target</p>
                                        </div>
                                        <p className="Cause_Goal">$5000</p>
                                    </div>


                                </div>
                            </div>
                            <div className="Progress_container">
                                    <span>59% - Raised</span>

                                    <div className="Progress">
                                        <div className="filled2"></div>
                                    </div>
                            </div>
                        </div>

                        <div className="CauseEach_card">

                            <div className="image_container">
                                <img src={Cause3} alt="Mwana wa Africa kids from school" />
                            </div>

                            <div className="CauseCard_Text">
                                <h5 className="green_color">Clothes and Shoes</h5>
                                <h4>Provide essential clothing and footwear for families facing hardship and cold weather</h4>

                                <div className="Stats">
                                    <div className="Each_Stat">
                                        <div className="cause_icon">
                                            <i className="fa-solid fa-bullseye"></i>
                                            <p>Target</p>
                                        </div>
                                        <p className="Cause_Goal">$1000</p>
                                    </div>
                                </div>
                            </div>
                                    <div className="Progress_container">
                                    <span>32% - Raised</span>
                                    <div className="Progress">
                                        <div className="filled3"></div>
                                    </div>
                                    </div>
                                    
                        </div>



                    </div>
                </div>
            </section>
}
export default OurCauses;