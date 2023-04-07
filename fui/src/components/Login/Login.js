import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
   Email: 'email',
   Password: 'password'
};

export const Login = () => {
   const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
      <div className="contact_section layout_padding">
         <form id="login" method="POST" onSubmit={onSubmit}>
            <div className="container">
               <div className="contact_section_2">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="mail_section_1">
                           <h1 className="contact_taital">Login</h1>
                           <input 
                              type="email"
                              id="email"
                              className="mail_text" 
                              placeholder="ivan@abv.bg" 
                              name={LoginFormKeys.Email}
                              value={values[LoginFormKeys.Email]}
                              onChange={changeHandler} 
                           />

                           <input 
                              type="password"
                              id="login-password"
                              className="mail_text" 
                              name={LoginFormKeys.Password}
                              value={values[LoginFormKeys.Password]}
                              onChange={changeHandler}                            
                           />
                           <div className="send_bt">
                              <a type="submit" value="Login">Login</a>
                           </div>
                              {/* <div className="send_bt"><a href="#">SEND</a></div>*/}
                              <input type="submit" className="send_bt" value="Login" />                     
                                 
                        </div>
                     </div>                
                  </div>
               </div>
            </div>
         </form>
      </div>
    );
};

