import { useFurnitureContext } from "../../contexts/FurnitureContext";

import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = () => {
    const fontSize24px = {fontsize:'24px'};
    const { furnitures } = useFurnitureContext();
    
    return (
        <div className="design_section layout_padding">
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="design_taital">All Furnitures</h1>                     
                     <div className="design_section_2">
                        <div className="row">                           
                           {/* <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Chair 01</p>
                                 <div className="image_3" href="#"><img src="images/img-3.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div> */}
                            {furnitures.map(x =>
                              <CatalogItem key={x._id} {...x} />
                           )}

                           {furnitures.length === 0 && (
                              <p className="design_text">No articles yet</p>
                           )}

                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="carousel-item">
                  <div className="container">
                     <h1 className="design_taital">Our Work Furniture</h1>
                     <p className="design_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratio</p>
                     <div className="design_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Chair 01</p>
                                 <div className="image_3" href="#"><img src="images/img-3.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Chair 02</p>
                                 <div className="image_4" href="#"><img src="images/img-4.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Table</p>
                                 <div className="image_4" href="#"><img src="images/img-5.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="design_taital">Our Work Furniture</h1>
                     <p className="design_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratio</p>
                     <div className="design_section_2">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Chair 01</p>
                                 <div className="image_3" href="#"><img src="images/img-3.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Chair 02</p>
                                 <div className="image_4" href="#"><img src="images/img-4.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="box_main">
                                 <p className="chair_text">Table</p>
                                 <div className="image_4" href="#"><img src="images/img-5.png" /></div>
                                 <p className="chair_text">Price $100</p>
                                 <div className="buy_bt"><a href="#">Details</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
            
            {/* <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" style={fontSize24px}></i>
            </a><a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" style={fontSize24px}></i>
            </a> */}
            
         </div>
         {/* <div className="container">
            <div className="read_bt"><a href="#">Read More</a></div>
         </div> */}
      </div>
    );
};