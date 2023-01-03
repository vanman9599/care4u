import {useEffect} from 'react'
import Header from '../components/Header'
import Script from 'next/script'




function Booking(){

    return(
          <>
 <Header />

<div id="calendly-widget" className="calendly-inline-widget"  data-url="https://calendly.com/care4ubali/nurse-care-1-hour" style={{minWidth:'320px',height:'630px'}}></div>

<Script src="https://assets.calendly.com/assets/external/widget.js" async />
 </>
    )
  
}

export default Booking;