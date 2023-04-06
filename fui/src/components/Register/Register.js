export const Register = () => {   

    return (
      <div class="contact_section layout_padding">
      <div class="container">
         <div class="contact_section_2">
            <div class="row">
               <div class="col-md-6">
                  <div class="mail_section_1">
                  <h1 className="contact_taital">Register</h1>
                  <input type="email" class="mail_text" placeholder="ivan@abv.bg" name="email" />
                  <input type="password" class="mail_text" name="password" id="register-password" />
                  <input type="password" class="mail_text" name="confirmPassword" id="confirm-password" value="" />                       
                  <div className="send_bt"><a href="#">SEND</a></div>
                  </div>
               </div>                  
            </div>
         </div>
      </div>
   </div>
    );
};

