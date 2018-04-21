import {
    Login,
    Logout,
    Register,
    RegisterSuccess,
    NavigateToLogoutScreen
} from './actionTypes';

const login = () => ({
    type: Login
});

const logout = () => ({
    type: Logout
});

const register = () => ({
    type: Register
});

const registerSuccess = () => ({
    type: RegisterSuccess
});

const navigateToLogoutScreen = () => ({
    type: NavigateToLogoutScreen
});

export {
    login,
    logout,
    register,
    registerSuccess,
    navigateToLogoutScreen
};