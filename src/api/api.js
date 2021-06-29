import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '915459b4-7729-4709-a7b0-c9159d9067c7'
    }
});
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}& count${pageSize}`)

            .then(response => {
                return response.data;
            });
    },
    getUsers2(u = 1) {
        return instance.delete(`follow/${u.id}`)

            .then(response => {
                return response.follow;
            });
    }
}

// export const getUsers2 = (u = 1) => {
//     return instance.get(`follow/${u.id}`)

//          .then(response => {
//              return response.data;
//          });
//  