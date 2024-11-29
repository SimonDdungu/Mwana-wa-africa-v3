import './Home.css'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import OurWork from '../components/OurWork';
import OurImpact from '../components/OurImpact';
import OurCauses from '../components/OurCauses';
import VolunteerBanner from '../components/VolunteerBanner';
import OurBlogs from '../components/OurBlogs';
import Footer from '../components/Footer';

function Home(){
return (
    <>
        <section className="Landing_site">
            <Navbar />
            <Hero />
        </section>

        <OurWork />
        <OurImpact />
        <OurCauses />
        <OurBlogs />
        <VolunteerBanner />
        <Sponsors />
        <Footer />
    </>
)
}
export default Home;