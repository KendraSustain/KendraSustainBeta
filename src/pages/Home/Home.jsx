import React, {useEffect, useContext} from 'react';
import Navbar from '../../components/Home/Navbar/Navbar';
import Topbar from '../../components/Home/Topbar/Topbar';
import Features from '../../components/Home/Features/Features';
import Organize from '../../components/Home/Organize/Organize';
import Newsletter from '../../components/Home/Newsletter/Newsletter';
import Partners from '../../components/Home/Partners/Partners';
// import Testimonials from '../../components/Home/Testimonials/Testimonials';
// import Pricing from '../../components/Home/Pricing/Pricing';
import Contactus from '../../components/Home/Contactus/Contactus';
import Footer from '../../components/Home/Footer/Footer';
import { Context } from '../../context/Contexts';


const Home = () => {
    const context = useContext(Context);
    useEffect(() => {
        context.setShowNavTop(false);
    }, [context]);
    return (
        <>
            <Navbar />
            <Topbar />
            <Features />
            <Organize />
            <Newsletter />
            <Partners />
            {/* <Testimonials />
            <Pricing /> */}
            <Contactus />
            <Footer />
        </>
    )
}

export default Home;
