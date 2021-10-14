export const addTokenToLS = (token) => { localStorage.setItem('token', token); };
export const getTokenFromLS = () => localStorage.getItem('token');
export const removeTokenFromLS = () => { localStorage.removeItem('token'); };
