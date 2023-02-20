import axiosClient from './axiosClient';

class Api {
    register = async (username: string, email: string, password: string) => {
        const url = 'register';
        const params = { username, email, password };
        return axiosClient.post(url, { params });
    }

    login = async (email: string, password: string) => {
        const url = 'login';
        const params = { email, password };
        return axiosClient.post(url, { params });
    }

    getAllPost = async () => {
        const url = 'post';
        return axiosClient.get(url);
    }

    getPost = async (_id: number) => {
        const url = `post/${_id}`;
        return axiosClient.get(url);
    }

    createPost = async (title: string, summary: string, img: string, author: string) => {
        const url = 'post';
        const params = { title, summary, img, author };
        return axiosClient.post(url, { params })
    }

    updPost = async (_id: number, title: string, summary: string, img: string, author: string) => {
        const url = `post/${_id}`;
        const params = { _id, title, summary, img, author };
        return axiosClient.put(url, { params });
    }

    deletePost = async (_id: number) => {
        const url = `post/${_id}`;
        return axiosClient.delete(url);
    }
}

export default new Api();