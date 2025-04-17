import React from "react";

import Header from '../components/Header/Header'
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import Equipments from '../components/Equipments/Equipments';
import Intro from '../components/Introduction/Intro'
import Contact from "../components/Contact/Contact";
import Credit from "../components/Credit/Credit";

function Home() {
    return(
        <>
            <Header />
            <Intro />
            <Services />
            <Equipments />
            <Contact />
            <Credit />
            <Footer />
        </>
    )

}

export default Home;