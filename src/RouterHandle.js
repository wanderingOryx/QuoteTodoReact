// RouterHandle.js
import { Routes, Route } from "react-router-dom"; // Import Routes
import App from "./App";
import Quote from "./Quote";

function MyRouter() {
    return (
        <Routes> {/* Wrap Routes */}
            <Route path="/" element={<App />} />
            <Route path="/quote-check" element={<Quote />} />
        </Routes>
    );
}

export default MyRouter;
