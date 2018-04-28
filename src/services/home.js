import request from '../utils/request';

export async function moveList() {
  const option = {
    method: 'POST',
    mode: 'cors'
  };
  return request('http://zs.sibada.cf:8080/FilmReviewSystemUser/topic/getMovie', option);
}