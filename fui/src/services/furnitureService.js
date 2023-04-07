import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/furnitures';

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

    const edit = (gameId, data) => request.put(`${baseUrl}/${gameId}`, data);

    const deleteGame = (gameId) => request.delete(`${baseUrl}/${gameId}`);


    return {
        getAll,
        getOne,
        create,
        edit,        
        delete: deleteGame,
    };
}
