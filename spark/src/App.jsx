import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import SwipePage from './SwipePage';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<SwipePage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
