import request from '../utils/request';

export async function getCode(params) {
    console.log(params.emil);
    const options = {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    };
    return request(`http://zs.sibada.cf:8080/FilmReviewSystemUser/user/register1?account=${params.emil}`,options);   
}

export async function register(params) {
    console.log(params);
    const options = {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    };
    return request(
    `http://zs.sibada.cf:8080/FilmReviewSystemUser/user/register2?userName=${params.userName}&code=${params.code}&userPassword=${params.password}`,options);   
}
export async function login(params) {
    console.log(params);
    const options = {
        method: 'GET',
        mode: 'cors',
    };
    return request(
    `http://zs.sibada.cf:8080/FilmReviewSystemUser/user/userLogin?account=${params.account}&userPassword=${params.password}`,options);   
}