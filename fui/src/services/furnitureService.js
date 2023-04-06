import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/furnitures';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result);

    return games;
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
};

export const create = async (furnitureData) => {
    const result = await request.post(baseUrl, furnitureData);

    console.log(result);

    return result;
};
