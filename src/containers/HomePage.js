import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage=()=>{
    return(
        <React.Fragment>
            <Header/>
            <About/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;