import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import SwipePage from './SwipePage';
import UserDashboard from './UserDashboard';
import ForumsPage from "./ForumsPage";
import RegisterUser from "./RegisterUser";

function App() {
  return (
    <Router basename="/sparkhacks-project"> 
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/swipe" element={<SwipePage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/forums-page" element={<ForumsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
