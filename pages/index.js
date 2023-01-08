import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Callout from '../components/Callout'
import Head from 'next/head'
import Services from '../components/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DogFoodListing from '../components/DogFoodListing'


function HomePage() {

    return(
        <>
        <div>
        
        <Header/>
        
        </div>
    <DogFoodListing/>
   

     </>)
  }
  
  export default HomePage