import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'


const Header =()=>{
    return(
        <>
        
            <Head>
                <title>Care4U Bali - Mobile/home Heatlcare</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Splash&family=Lato:wght@700&display=swap" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
      <script src="https://kit.fontawesome.com/fb69bafb86.js" crossOrigin="anonymous"></script> 
            </Head>
           

        
        
        <Navbar />
    </>
    )
}
export default Header;