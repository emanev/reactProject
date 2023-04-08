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
            </div> 
         </div>        
      </div>
    );
};