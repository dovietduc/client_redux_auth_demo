import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

function App() {
    return (
        <BrowserRouter>
            
                <div className="App">
                    <Routes>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/admin" element={<AdminPage />} />      
                    </Routes>          
                </div>
           
        </BrowserRouter>
    );
}

export default App;
