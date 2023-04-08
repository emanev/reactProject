import { Link } from 'react-router-dom';

export const RecentFurniture = ({
    index,
    _id,
    name,
    image,
    price,       
}) => {    
    if (index==0) {
        return (        
            <div className="carousel-item active">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <h1 className="banner_taital">Best <br/> Design <br/>of Furnitures</h1>
                        <p className="banner_text">Welcome to our great collection of furnitures</p>                    
                    </div>
                    <div className="col-md-6">
                        <div className="image_1"><img src={image}/></div>
                    </div>
                    </div>
                </div>
            </div>            
        );
    }
    else {
        return (        
            <div className="carousel-item">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <h1 className="banner_taital">Best <br/> Design <br/>of Furnitures</h1>
                        <p className="banner_text">Welcome to our great collection of furnitures</p>                    
                    </div>
                    <div className="col-md-6">
                        <div className="image_1"><img src={image}/></div>
                    </div>
                    </div>
                </div>
            </div>            
        );
    }
}
