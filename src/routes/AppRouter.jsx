import { Navigate, Route, Routes } from 'react-router-dom';
import Nosotros from '../pages/Nosotros';
import Home from '../pages/Home';

    
    const NotFound = () => <h1 className='h-100 d-flex align-items-center justify-content-center flex-column'>Lo Sentimos; Esta Pagina No Existe</h1>;
    
    function AppRouter() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Nosotros to="/home" />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="404" element={<NotFound />} />
    
                    <Route path="nosotros" element={<Nosotros />} />
                    <Route path="home" element={<Home />} />
                </Routes>
                
            </>
        );
    }
    
export default AppRouter;