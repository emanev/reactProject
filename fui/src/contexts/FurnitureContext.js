import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { furnitureServiceFactory } from '../services/furnitureService';

export const FurnitureContext = createContext();

export const FurnitureProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [furnitures, setFurnitures] = useState([]);
    const furnitureService = furnitureServiceFactory();

    useEffect(() => {
        furnitureService.getAll()
            .then(result => {
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
    
    const deleteFurniture = (furnitureId) => {
        setFurnitures(state => state.filter(furniture => furniture._id !== furnitureId));
    };

    const getFurniture = (furnitureId) => {
        return furnitures.find(furniture => furniture._id === furnitureId);
    };

    const contextValues = {
        furnitures,
        onCreateFurnitureSubmit,
        onFurnitureEditSubmit,
        deleteFurniture,
        getFurniture,
    };

    return (
        <FurnitureContext.Provider value={contextValues}>
            {children}
        </FurnitureContext.Provider>
    );
};

export const useFurnitureContext = () => {
    const context = useContext(FurnitureContext);

    return context;
};