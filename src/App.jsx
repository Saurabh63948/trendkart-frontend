import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // ✅ import Navigate
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductListingPage from './pages/ProductListingPage';
import Footer from './components/Footer';
import { AuthProvider } from './contextApi/AuthContext'; // Import AuthContext



function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider to provide context */}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductListingPage />} // Protect ProductListingPage route
            
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes as necessary */}
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
