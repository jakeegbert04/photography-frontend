import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="posts" element={<Posts />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;
