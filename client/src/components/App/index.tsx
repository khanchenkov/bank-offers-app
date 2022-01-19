import MainPage from "../pages/MainPage";
import OfferPage from '../OfferPage';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="offer/:id" element={<OfferPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;