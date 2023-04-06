export const Home = () => { 
    const fontStyleInitial = {fontstyle:'initial'};   

    return (
        <div className="banner_section layout_padding">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Best <br/> Design <br/>of Furnitur</h1>
                           <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                           <div className="btn_main">
                              <div className="contact_bt"><a href="#">Contact US</a></div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="image_1"><img src="images/img-1.png" /></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Best <br/> Design <br/>of Furnitur</h1>
                           <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                           <div className="btn_main">
                              <div className="contact_bt"><a href="#">Contact US</a></div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="image_1"><img src="images/img-1.png" /></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                           <h1 className="banner_taital">Best <br/> Design <br/>of Furnitur</h1>
                           <p className="banner_text">It is a long established fact that a reader will bedistracted by the readable content of </p>
                           <div className="btn_main">
                              <div className="contact_bt"><a href="#">Contact US</a></div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="image_1"><img src="images/img-1.png" /></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i style={fontStyleInitial}>01</i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i style={fontStyleInitial}>02</i>
            </a>
         </div>
      </div>
    );
};

