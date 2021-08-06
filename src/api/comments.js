import { BASE_URL } from './api';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const addComment = async(comment) => {
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(comment),
    redirect: 'follow'
  };

  await fetch(`${BASE_URL}/comments`, requestOptions);
};