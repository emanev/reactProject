import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFurnitureContext } from '../../contexts/FurnitureContext';

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { furnitureServiceFactory } from "../../services/furnitureService";

export const EditFurniture = () => {
    const { onFurnitureEditSubmit } = useFurnitureContext();
    const { furnitureId } = useParams();
    const furnitureService = useService(furnitureServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
		price: '',
        image: '',  
    }, onFurnitureEditSubmit);

    useEffect(() => {
        furnitureService.getOne(furnitureId)
            .then(result => {
                changeValues(result);
            });
    }, [furnitureId]);

    return (
        <div className="newsletter_section layout_padding">
		<form id="edit" method="post" onSubmit={onSubmit}>
			<div className="container">            
			<div className="col-md-6">
				<h1 className="newsletter_taital">Edit Furniture</h1>			  
				<input 
                    value={values.name} 
                    onChange={changeHandler} 
                    type="text" 
                    className="email_text"                     
                    name="name" 
                    id="name" 
                />

				<input 
                    value={values.price} 
                    onChange={changeHandler} 
                    type="number" 
                    className="email_text"                     
                    name="price" 
                    id="price" 
                />

				<input 
                    value={values.image} 
                    onChange={changeHandler} 
                    type="text" 
                    className="email_text"                    
                    name="image" 
                    id="image" 
                />
				
				<div className="subscribe_bt">
					{/* <a type="submit" value="Edit Furniture">Edit Furniture</a> */}
                    <input className="subscribe_bt" type="submit" value="Edit Furniture" />
				</div>
			</div>            
			</div>
		</form>
      </div>
    );
};