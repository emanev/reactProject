import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
      <div class="contact_section layout_padding">
         <form id="register" method="post" onSubmit={onSubmit}>
            <div class="container">
               <div class="contact_section_2">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="mail_section_1">
                        <h1 className="contact_taital">Register</h1>
                        <input 
                           type="email"
                           id="email" 
                           name="email"
                           class="mail_text" 
                           placeholder="Enter Email..." 
                           value={values.email}
                           onChange={changeHandler}
                        />

                        <input 
                           type="password" 
                           class="mail_text" 
                           name="password" 
                           id="register-password"
                           placeholder="Enter Password..." 
                           value={values.password}
                           onChange={changeHandler}
                        />

                        <input 
                           type="password" 
                           class="mail_text" 
                           name="confirmPassword" 
                           id="confirm-password"
                           placeholder="Retype Password..."  
                           value={values.confirmPassword}
                           onChange={changeHandler}
                        />   

                           <div className="send_bt">
                              {/* <a type="submit" value="Register">Register</a> */}
                              <input type="submit" className="send_bt" value="Register" />
                           </div>
                        </div>
                     </div>                  
                  </div>
               </div>
            </div>
         </form>
      </div>
    );
};

