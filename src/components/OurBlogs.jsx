import './OurBlogs.css'
import OurBlogsCards from './OurBlogsCards';
import Founder from '../images/founders (3).jpeg'
import Child2 from '../images/Mwana 5.jpeg'
import Child3 from '../images/Child 3.jpg'
import Mwana4 from '../images/Mwana 4.jpeg'

function OurBlogs(){
    return <section className="Our_Blogs">
                <div className="Our_Blogs_container container">
                    <h3>LATEST BLOGS</h3>

                    <div className="Our_Blog_Cards">

                    <OurBlogsCards 
                        image={Founder}
                        imagealt="Founder of Mwana Wa Africa"
                        date="December 10, 2024"
                        title="History of Mwana Wa Africa Children's Ministry (MWACM)"
                    />
                    <OurBlogsCards 
                        image={Child2}
                        imagealt="Mwana Wa Africa Volunteers interacting with children"
                        date="December 10, 2024"
                        title="Mwana Wa Africa Chidlren's School — Leilani Kindergarten"
                    />
                    <OurBlogsCards 
                        image={Child3}
                        imagealt="Mwana Wa Africa Community"
                        date="December 10, 2024"
                        title="Meet the Mwana Wa Africa Community"
                    />

                    <OurBlogsCards 
                        image={Mwana4}
                        imagealt="Mwana Wa Africa Community"
                        date="December 10, 2024"
                        title="Mwana Wa Africa Gives back to the community of Nakaseke "
                    />


                    </div>
                    
                </div>
            </section>
}
export default OurBlogs;