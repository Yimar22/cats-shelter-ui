import axios from 'axios';

export const axiosInstance = axios.create({baseURL: process.env.API});

export const AnimalController = {
    register(animal) {
        return axiosInstance.request({
            method: 'POST',
            url: 'animals',
            data: animal
        })
    },
    list() {
        return axiosInstance.request({
            method: 'GET',
            url: 'animals'
        });
    },
    delete(name) {
        return axiosInstance.request({
            method: 'DELETE',
            url: `animals/${name}`
        });
    },
    getAnimal(name) {
        return axiosInstance.request({
            method: 'GET',
            url: `animals/${name}`
        });
    },
    updateAnimal(name, animal) {
        return axiosInstance.request({
            method: 'PUT',
            url: `animals/${name}`,
            data: animal
        });
    }
};