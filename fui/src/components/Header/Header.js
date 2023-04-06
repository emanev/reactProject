import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header_section">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="logo" href="index.html"><img src="images/logo.png" /></a>
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-furniture">Create</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="search_icon">
                                <ul>
                                    <li><a href="#"><img src="images/search-icon.png" /></a></li>
                                    <li><a href="#"><img src="images/user-icon.png" /></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>         
                </div>
            </nav>
        </div>
    );
};

