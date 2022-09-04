import logo from "./logo.svg";
import "./App.css";
import { Swapp, Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="swapp" element={<Swapp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
