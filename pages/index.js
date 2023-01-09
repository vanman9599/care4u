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
            article="
            Lorem ipsum dolor sit amet, ad qui nulla malorum adipiscing. Eam te vero alterum maiorum, id persius numquam nominavi sit. Te per assum epicuri voluptaria. Audiam virtute scripserit vis te, nibh exerci definitiones id ius, debitis perpetua liberavisse vel at. Quidam apeirian inimicus ad sit, qui possit scaevola deseruisse ne.

Ut mel petentium pertinacia signiferumque, mel et iusto imperdiet. Est cu phaedrum perpetua signiferumque. Agam altera integre cum no. Pri eu aliquip laboramus, ea graeco neglegentur liberavisse nec, at error democritum has. Eam an partem eligendi pertinax, modus denique id sed. Ad discere facilisi repudiandae eam.

Mel ex posse mucius, ius solet reprehendunt cu. Ut paulo perpetua intellegat mei, id eum tritani invidunt. His detracto recusabo salutandi te, placerat vivendum id vis, vel ex eius aliquam salutatus. Est et ignota molestiae, no impedit theophrastus complectitur qui, ex nonumes detracto expetenda ius. Mea ei errem corpora consetetur, ex nobis mollis nam.

Ex has delectus vituperata, ne eum alia volumus, mea accusamus repudiandae no. Eam laboramus efficiendi et, eu aliquid suscipit his, est an facer deserunt definitiones. Labore vidisse imperdiet sit eu, doctus commodo ex pri. Ut usu democritum voluptatum, eam quaeque minimum scribentur ut, vocent integre pro et. Dicant constituto ea mei, novum aeque sadipscing et mei, wisi veri no mel.

At vel unum mollis. Vel in tibique epicuri voluptua. Vis et stet velit torquatos. In mei adhuc omnes. Quo natum putant ex, eu eum noster assentior inciderint. Te mea altera ocurreret accommodare. Ut facilis phaedrum quaerendum vim, vidisse oblique at nec.
            
            "
        />
 <DogFoodListing/>
     </>)
  }
  
  export default HomePage