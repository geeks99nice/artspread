import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CasesPage from './pages/CasesPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cases" element={<CasesPage />} />
      <Route path="/cases/:category" element={<CasesPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
