export const Login = () => {    

    return (
        <div className="contact_section layout_padding">
        <div className="container">
           <div className="contact_section_2">
              <div className="row">
                 <div className="col-md-6">
                    <div className="mail_section_1">
                       <h1 className="contact_taital">Login</h1>
                       <input type="email" class="mail_text" placeholder="ivan@abv.bg" name="email" />
                       <input type="password" class="mail_text" name="password" id="register-password" />
                       <div className="send_bt"><a href="#">SEND</a></div>
                    </div>
                 </div>                
              </div>
           </div>
        </div>
     </div>
    );
};

