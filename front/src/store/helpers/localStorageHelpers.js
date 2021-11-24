export const addTokenToLS = (userData) => { localStorage.setItem('currentUser', userData); };
export const getTokenFromLS = () => localStorage.getItem('currentUser');
export const removeTokenFromLS = () => { localStorage.removeItem('currentUser'); };
