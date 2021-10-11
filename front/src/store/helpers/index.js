export const addToLS = (token) => { localStorage.setItem('token', JSON.stringify(token)); };
export const takeFromLS = localStorage.getItem('token');
