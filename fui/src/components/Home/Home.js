import { useFurnitureContext } from "../../contexts/FurnitureContext";
import { RecentFurniture } from './RecentFurniture';

export const Home = () => { 
    const fontStyleInitial = {fontstyle:'initial'};
    const { furnitures } = useFurnitureContext();
    
   return (
        <div className="banner_section layout_padding">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">           

               {furnitures.map((x, index) => {                  
                  return <RecentFurniture index={index} key={x._id} {...x} />}
               )}

               {furnitures.length === 0 && (                  
                  <p className="design_text">No furnitures yet </p>  
               )}
              
            </div>
            {furnitures.length !== 0 && (
               <>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                  <i style={fontStyleInitial}>01</i>
                  </a><a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                  <i style={fontStyleInitial}>02</i>
                  </a>
               </>
            )}            
         </div>
      </div>
    );
};
