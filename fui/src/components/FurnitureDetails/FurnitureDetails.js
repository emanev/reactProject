import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { furnitureServiceFactory } from '../../services/furnitureService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useFurnitureContext } from '../../contexts/FurnitureContext';

export const FurnitureDetails = () => {
    const { furnitureId } = useParams(); 
    const { userId } = useAuthContext();
    const { deleteFurniture } = useFurnitureContext();
    const [furniture, setFurniture] = useState({});
    const furnitureService = useService(furnitureServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
      furnitureService.getOne(furnitureId)
            .then(result => {
               setFurniture(result);
            })
    }, [furnitureId]);

    const isOwner = furniture._ownerId === userId;

    const onDeleteClick = async () => {
         // eslint-disable-next-line no-restricted-globals
         const result = confirm(`Are you sure you want to delete ${furniture.name}`);

         if (result) {
            await furnitureService.delete(furniture._id);

            deleteFurniture(furniture._id);

            navigate('/catalog');
         }
   };

    return (
        <div className="about_section layout_padding">
         <div className="container">
            <div className="about_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <div className="image_2"><img src={furniture.image} /></div>
                  </div>
                  <div className="col-md-6">
                     <h1 className="about_taital">Furniture Details</h1>                     
                     <p className="about_text">Name: {furniture.name}</p>
                     <p className="about_text">Price: {furniture.price}$</p>
                     {isOwner && (
                        <div className="readmore_bt">                     
                           <Link to={`/catalog/${furniture._id}/edit`} className="subscribe_bt">Edit</Link>
                           <input className="subscribe_bt" onClick={onDeleteClick} type="submit" value="Delete"/>                           
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

