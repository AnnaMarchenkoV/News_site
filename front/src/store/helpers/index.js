export const addToLS = (token) => { localStorage.setItem('token', JSON.stringify(token)); };
export const tokenFromLS = localStorage.getItem('token');
