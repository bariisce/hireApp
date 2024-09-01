import React from 'react';
import { createStoreHook, Provider } from 'react-redux';
import reducer from './reducer';

const store = createStoreHook(reducer)

const AuthProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default AuthProvider;
