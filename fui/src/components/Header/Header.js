import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <div className="header_section">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="logo" href="/"><img src="images/logo.png" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">All</Link>
                            </li>  
                            {isAuthenticated && ( 
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create-furniture">Create</Link>
                                </li>                            
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Logout</Link>
                                </li>
                            </>
                            )}
                            {!isAuthenticated && ( 
                            <>                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                            )}                           
                        </ul>                       
                        <div className="search_icon"> 
                            {isAuthenticated && (                             
                                <span> {userEmail} </span>                            
                            )}                                
                        </div>                        
                    </div>         
                </div>
            </nav>
        </div>
    );
};

