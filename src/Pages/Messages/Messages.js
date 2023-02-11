import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import HomeMessage from './page/Home';
import Home from './page/Home';
import MainLogin from './page/Login';
import Register from './page/Register';

function PageMessages() {
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            console.log('testing');
            return <Navigate to="/login"/>;
        }
        return children;
    };
    console.log(currentUser);
    <Routes path="/">
        <Route
            index
            element={
                <ProtectedRoute>
                    <HomeMessage />
                </ProtectedRoute>
            }
        />
    </Routes>;
}

export default PageMessages;
