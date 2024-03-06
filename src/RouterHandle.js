// RouterHandle.js
import { Routes, Route } from "react-router-dom"; // Import Routes
import App from "./App";
import QuoteCheck from "./QuoteCheck";

function MyRouter() {
    return (
        <Routes> {/* Wrap Routes */}
            <Route path="/" element={<App />} />
            <Route path="/quote-check" element={<QuoteCheck />} />
        </Routes>
    );
}

export default MyRouter;
