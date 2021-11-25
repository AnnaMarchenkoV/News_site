export const addTokenToLS = (userData) => { localStorage.setItem('userData', JSON.stringify(userData)); };
export const getTokenFromLS = () => JSON.parse(localStorage.getItem('userData'));
export const removeTokenFromLS = () => { localStorage.removeItem('userData'); };
