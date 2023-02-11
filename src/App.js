import { useContext } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Content from './Components/Layout/Content';
import Header from './Components/Layout/Header';
import { AuthContext } from './Pages/Messages/context/AuthContext';
import MainLogin from './Pages/Messages/page/Login';
import Register from './Pages/Messages/page/Register';
import '~/Styles/Style/StyleMessages.scss';

function App() {
    const location = useLocation();
    const checkPathname = location.pathname.split('/')[1];
    const { currentUser } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            console.log('testing');
            return <Navigate to="/login" />;
        }
        return children;
    };
    return (
        <>
            {checkPathname === 'login' || checkPathname === 'register' ? null : (
                <>
                    <ProtectedRoute>
                        <Header />
                        <Content />
                    </ProtectedRoute>
                </>
            )}
            <Routes>
                <Route path="/login" element={<MainLogin />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
