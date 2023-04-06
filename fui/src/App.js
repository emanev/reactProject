import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as furnitureService from './services/furnitureService';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateFurniture } from "./components/CreateFurniture/CreateFurniture";
import { Catalog } from "./components/Catalog/Catalog";
import { FurnitureDetails } from "./components/FurnitureDetails/FurnitureDetails";

function App() {
   
   const navigate = useNavigate();
   const [furnitures, setFurnitures] = useState([]);

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
  
  return (
      <div>      
         <Header />

         {/* <main id="main-content"> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create-furniture' element={<CreateFurniture onCreateFurnitureSubmit={onCreateFurnitureSubmit} />} />
                    <Route path='/catalog' element={<Catalog furnitures={furnitures} />} />
                    <Route path='/catalog/:furnitureId' element={<FurnitureDetails />} />
                </Routes>
            {/* </main> */}
         {/* <Home />
         <FurnitureDetails />      
         <Catalog />         
         <CreateFurniture />
         <Login />
         <Register />
         */}
         <Footer />
    </div>
  );
}

export default App;
