import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";


function App() {
    return (
        <div>
            <Routes>
                <Route path="*" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </div>
    )
}

export default App;