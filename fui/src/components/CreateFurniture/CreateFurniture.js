export const CreateFurniture = () => {    

    return (
        <div className="newsletter_section layout_padding">
         <div className="container">            
		   <div className="col-md-6">
			  <h1 className="newsletter_taital">Create Furniture</h1>			  
			  <input type="text" className="email_text" placeholder="Enter Furniture Name..." name="furniture" id="furniture" />
			  <input type="number" className="email_text" placeholder="Enter Price..." name="price" id="price" />
			  <input type="text" className="email_text" placeholder="Enter Image..." name="image" id="image" />
			
			  {/* <input className="btn submit" type="submit" value="Create Game"> */}
			  
			  <div className="subscribe_bt">
				<a href="#">Create</a>					
			  </div>
		   </div>            
         </div>
      </div>
    );
};

