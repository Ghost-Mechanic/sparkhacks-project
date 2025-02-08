import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import SwipePage from './SwipePage';
import UserDashboard from './UserDashboard';
import ForumsPage from "./ForumsPage";
<<<<<<< HEAD
import RegisterUser from "./RegisterUser";

function App() {
  return (
    <Router basename="/sparkhacks-project"> 
      <Routes>
        <Route path="/" element={<SwipePage />} />
        <Route path="/swipe" element={<SwipePage />} />
=======
import RegisterUser from "./RegisterUser"

function App() {
  return (
    <Router basename='/sparkhacks-project'> 
      <Routes>
        <Route path="/" element={<RegisterUser />} />
>>>>>>> fa81cb365ee00c5a260b3fcc7d54d8101013ef52
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/forums-page" element={<ForumsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
