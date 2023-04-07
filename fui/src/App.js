import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { furnitureServiceFactory } from './services/furnitureService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { CreateFurniture } from "./components/CreateFurniture/CreateFurniture";
import { Catalog } from "./components/Catalog/Catalog";
import { FurnitureDetails } from "./components/FurnitureDetails/FurnitureDetails";
import { EditFurniture } from './components/EditFurniture/EditFurniture';

function App() {   
   const navigate = useNavigate();
   const [furnitures, setFurnitures] = useState([]);
   const [auth, setAuth] = useState({});
   const furnitureService = furnitureServiceFactory(auth.accessToken);
   const authService = authServiceFactory(auth.accessToken)

    useEffect(() => {
        furnitureService.getAll()
            .then(result => {
                console.log(result);
                setFurnitures(result)
            })
    }, []);

    const onCreateFurnitureSubmit = async (data) => {
        const newFurniture = await furnitureService.create(data);

        setFurnitures(state => [...state, newFurniture]);

        navigate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            console.log(result);
            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);
            
            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const onFurnitureEditSubmit = async (values) => {
        const result = await furnitureService.edit(values._id, values);

        setFurnitures(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };
  
  return (
    <AuthContext.Provider value={contextValues}>
      <div>      
         <Header />
         
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-furniture' element={<CreateFurniture onCreateFurnitureSubmit={onCreateFurnitureSubmit} />} />
                    <Route path='/catalog' element={<Catalog furnitures={furnitures} />} />
                    <Route path='/catalog/:furnitureId' element={<FurnitureDetails />} />
                    <Route path='/catalog/:furnitureId/edit' element={<EditFurniture onFurnitureEditSubmit={onFurnitureEditSubmit} />} />
                </Routes>            
        
         <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
