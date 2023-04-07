import { useState } from 'react';

export const CreateFurniture = ({
    onCreateFurnitureSubmit,
}) => {

	const [values, setValues] = useState({
        name: '',
		price: '',
        image: '',        
    });

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateFurnitureSubmit(values);
    };

    return (
      <div className="newsletter_section layout_padding">
		<form id="create" method="post" onSubmit={onSubmit}>
			<div className="container">            
			<div className="col-md-6">
				<h1 className="newsletter_taital">Create Furniture</h1>			  
				<input value={values.name} onChange={changeHandler} type="text" className="email_text" placeholder="Enter Furniture Name..." name="name" id="name" />
				<input value={values.price} onChange={changeHandler} type="number" className="email_text" placeholder="Enter Price..." name="price" id="price" />
				<input value={values.image} onChange={changeHandler} type="text" className="email_text" placeholder="Enter Image..." name="image" id="image" />
							
				<div className="subscribe_bt">
					{/* <a type="submit" value="Add Furniture">Add Furniture</a> */}
					<input className="subscribe_bt" type="submit" value="Add Furniture" />
				</div>
			</div>            
			</div>
		</form>
      </div>
    );
};

