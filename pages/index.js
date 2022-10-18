import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Callout from '../components/Callout'
import Head from 'next/head'
import Services from '../components/Services'


function HomePage() {

    return(
        <>
        <div>
        
        <Header/>
     <Hero />
        </div>
    
    <div className="container-fluid">
          <div className="row justify-content-evenly">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                <Callout icon='bi bi-car-front-fill large-icon' title="We Come To You!" text="Our mobile nurses will come to you on a moment's notice." />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
             <Callout icon='bi bi-clipboard2 large-icon' title="Services" text="We offer a full range of healthcare services from IV drips to wound treatment." />
             </div>
             <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"> <Callout icon="bi bi-chat-quote-fill large-icon" title="100% Satisfaction!" text="We pride ourselves with our professional services. We love happy clients" /></div>
            
             </div>
            </div>
            
        <Services />

     </>)
  }
  
  export default HomePage