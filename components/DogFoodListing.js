import { goodreads } from 'fontawesome';
import react from 'react';
import dogfoods from './dogfoods';


const DogFoodListing = ()=>{
 const foods = dogfoods.map((food) => 


<div className="container-fluid box">
          <div className="row justify-content-evenly m-auto">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <h2>{food.foodname} <span className="rating">{food.title}</span></h2>
               
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <p className="description">{food.description}</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
            <a href={food.link} >
             <img key={food.foodname} alt={food.foodname} src={food.pic} />
             </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 promo text-center">
             <p>{food.promo}</p>
             <a href={food.link} >
             <button type="button" className="btn goButton">
                Get {food.foodname} now!
                </button>
                </a>
          </div>
        </div>
    </div>


    
     
   
        
       
    

    


 )
    return(
       <h2>{foods}</h2>
    )

   
    
    
}

export default DogFoodListing;