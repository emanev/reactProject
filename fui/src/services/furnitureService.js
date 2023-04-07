import { requestFactory } from './requester';

// const baseUrl = 'http://localhost:3030/jsonstore/furnitures';
const baseUrl = 'http://localhost:3030/data/furnitures';


export const furnitureServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const furnitures = Object.values(result);

        return furnitures;
    };

    const getOne = async (furnitureId) => {
        const result = await request.get(`${baseUrl}/${furnitureId}`);

        return result;
    };

    const create = async (furnitureData) => {
        const result = await request.post(baseUrl, furnitureData);

        console.log(result);

        return result;
    };

    const edit = (furnitureId, data) => request.put(`${baseUrl}/${furnitureId}`, data);

    const deleteFurniture = (furnitureId) => request.delete(`${baseUrl}/${furnitureId}`);

    return {
        getAll,
        getOne,
        create,
        edit,        
        delete: deleteFurniture,
    };
}
