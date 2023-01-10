import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Callout from '../components/Callout'
import Head from 'next/head'
import Services from '../components/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DogFoodListing from '../components/DogFoodListing'
import Article from '../components/Article'


function HomePage() {

    return(
        <>
        <div>
        
        <Header/>
        
        </div>
   
        
            <Hero />
        
        
 <DogFoodListing/>
     </>)
  }
  
  export default HomePage