import {
    setLocalStorage,
    getLocalStorage,
    deleteLocalStorage,
} from './localStorage';

export const setAuthentication = (user) => {
    setLocalStorage('user', user);
};

export const isAuthenticated = () => {
    if (getLocalStorage('user')) {
        return getLocalStorage('user');
    } else {
        return false;
    }
};

export const logout2 = (next) => {
    deleteLocalStorage('user');

    next();
};

