import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DataManagement from "./pages/DataManagement.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import Analytics from "./pages/Analytics.jsx";
import ReactionsManagement from "./pages/ReactionsManagement.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/data-management" element={<DataManagement />} />
        <Route exact path="/user-management" element={<UserManagement />} />
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/reactions-management" element={<ReactionsManagement />} />
      </Routes>
    </Router>
  );
}

export default App;