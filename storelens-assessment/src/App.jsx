import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './context/AppContext';

// Pages
import Landing from './pages/Landing/Landing';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import EmailVerification from './pages/Onboarding/EmailVerification';
import ConnectShopify from './pages/Onboarding/ConnectShopify';
import ImportProgress from './pages/Onboarding/ImportProgress';
import Personalization from './pages/Onboarding/Personalization';
import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports';
import Settings from './pages/Settings/Settings';

function App() {
  const { isAuthenticated } = useAppContext();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      
      {/* Onboarding Flow */}
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/connect" element={<ConnectShopify />} />
      <Route path="/import" element={<ImportProgress />} />
      <Route path="/personalize" element={<Personalization />} />
      
      {/* Main App */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/*" element={<Dashboard />} /> {/* catch audience, products, etc */}
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
