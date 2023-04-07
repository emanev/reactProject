import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { furnitureServiceFactory } from './services/furnitureService';
import { AuthProvider } from './contexts/AuthContext';
import { FurnitureProvider } from './contexts/FurnitureContext';

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
import { RouteGuard } from './components/common/RouteGuard';
import { FurnitureOwner } from './components/common/FurnitureOwner';

function App() {   
   const navigate = useNavigate();
   const [furnitures, setFurnitures] = useState([]);   
   const furnitureService = furnitureServiceFactory(); //auth.accessToken
   
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

    const onFurnitureEditSubmit = async (values) => {
        const result = await furnitureService.edit(values._id, values);

        setFurnitures(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    }
   
  return (
    <AuthProvider>
        <FurnitureProvider>
            <div>      
                <Header />
                
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />                    
                            <Route path='/logout' element={
                                <RouteGuard>
                                    <Logout />
                                </RouteGuard>
                            } />
                            <Route path='/register' element={<Register />} />                    
                            <Route path='/create-furniture' element={
                                <RouteGuard>
                                    <CreateFurniture onCreateFurnitureSubmit={onCreateFurnitureSubmit} />
                                </RouteGuard>
                            } />
                            <Route path='/catalog' element={<Catalog furnitures={furnitures} />} />
                            <Route path='/catalog/:furnitureId' element={<FurnitureDetails />} />                    
                            <Route path='/catalog/:furnitureId/edit' element={
                                <RouteGuard>
                                    <FurnitureOwner>
                                        <EditFurniture onFurnitureEditSubmit={onFurnitureEditSubmit} />
                                    </FurnitureOwner>
                                </RouteGuard>
                            } />


                            {/* <Route element={<RouteGuard />}>
                                        <Route path='/catalog/:gameId/edit' element={
                                            <GameOwner>
                                                <EditGame />
                                            </GameOwner>
                                        } />
                                        <Route path='/create-game' element={<CreateGame />} />
                                        <Route path='/logout' element={<Logout />} />
                                    </Route> */}
                        </Routes>            
                
                <Footer />
            </div>
        </FurnitureProvider>
    </AuthProvider>
  );
}

export default App;
