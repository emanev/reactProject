import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { furnitureServiceFactory } from '../../services/furnitureService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const FurnitureDetails = () => {
    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const { furnitureId } = useParams();
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
        await furnitureService.delete(furniture._id);

        // TODO: delete from state

        navigate('/catalog');
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
                     <p className="about_text">Price: {furniture.price}</p>
                     {isOwner && (
                     <div className="readmore_bt">                     
                        <Link to={`/catalog/${furniture._id}/edit`} className="subscribe_bt">Edit</Link>
                        <input className="subscribe_bt" onClick={onDeleteClick} type="submit" value="Delete"/>                   
                        {/* <a href="#">Edit</a>
                        <a href="#">Delete</a> */}
                     </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

