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
   
        <Article 
            title="What fresh dog food will you feed your dog?"
            pic="dog_bowl_landscape.jpeg"
            pic_mobile="dog_bowl_landscape_300.jpeg"
            article="
            Lorem ipsum dolor sit amet, ad qui nulla malorum adipiscing. Eam te vero alterum maiorum, id persius numquam nominavi sit. Te per assum epicuri voluptaria. Audiam virtute scripserit vis te, nibh exerci definitiones id ius, debitis perpetua liberavisse vel at. Quidam apeirian inimicus ad sit, qui possit scaevola deseruisse ne.

Ut mel petentium pertinacia signiferumque, mel et iusto imperdiet. Est cu phaedrum perpetua signiferumque. Agam altera integre cum no. Pri eu aliquip laboramus, ea graeco neglegentur liberavisse nec, at error democritum has. Eam an partem eligendi pertinax, modus denique id sed. Ad discere facilisi repudiandae eam.
   
            "
        />
 <DogFoodListing/>
     </>)
  }
  
  export default HomePage