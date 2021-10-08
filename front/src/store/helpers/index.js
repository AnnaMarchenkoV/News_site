// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';

export const addToLS = (token) => { localStorage.setItem('token', JSON.stringify(token)); };
export const takeFromLS = localStorage.getItem('token');
// export const tokenKey = (takeFromLS.split(' ')[1]) || null;
// export const currentUserId = ((jwt_decode(tokenKey)).sub);
