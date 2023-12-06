import { Navigate, Route, Routes } from 'react-router-dom';
import Nosotros from '../pages/Nosotros';

    
    const NotFound = () => <h1>404: La Pagina No Existe</h1>;
    
    function AppRouter() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Nosotros to="/home" />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="404" element={<NotFound />} />
    
                    <Route path="nosotros" element={<Nosotros />} />
                </Routes>
            </>
        );
    }
    
export default AppRouter;