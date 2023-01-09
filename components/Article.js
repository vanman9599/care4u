import react from 'react';

const Article = (props) =>{

    return(
        <div className="container-fluid article">
          <div className="row justify-content-evenly m-auto">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-5">
            
                <h1>{props.title}</h1>
                <img className="image1" src={props.pic} />
                <img className="image2" src={props.pic_mobile} />
                <p>{props.article}</p>
            </div>
        </div>
    </div>
    )

}

export default Article;