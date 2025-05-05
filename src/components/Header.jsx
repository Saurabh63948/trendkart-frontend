import React from 'react';
import { Container, Nav, Dropdown } from 'react-bootstrap';
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextApi/AuthContext'; // Import useAuth hook
import logo from "../../public/Logo.png"
const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // Use AuthContext to get login status and logout function

  const handleLogout = () => {
    logout(); // Call logout function from context
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <header className="border-bottom py-2 bg-white">
      <Container fluid className="px-3 px-md-4">
        <div className="d-flex justify-content-between align-items-center mb-2 gap-2 gap-md-0">
          
          {/* Left: Apple Icon */}
          <div className="d-flex align-items-center">
           <img src={logo} alt="" />
          </div>

          {/* Center: LOGO Text */}
          <div className="text-center flex-grow-1">
            <div className="fw-bold fs-4">LOGO</div>
          </div>

          {/* Right: Search, User, and Login/Logout */}
          <div className="d-flex align-items-center gap-3">
            <FaSearch style={{ cursor: 'pointer' }} />
            <FaHeart style={{ cursor: 'pointer' }} />
            <FaShoppingBag style={{ cursor: 'pointer' }} />
            
            <div>
              <FaUser />
            </div>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="p-0 text-dark fw-bold" style={{ textDecoration: 'none' }}>
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>EN</Dropdown.Item>
                <Dropdown.Item>FR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Login / Logout button based on isLoggedIn state */}
            {isLoggedIn ? (
              <button className="btn btn-outline-dark btn-sm" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-dark btn-sm" onClick={() => navigate('/login')}>
                Login
              </button>
            )}
          </div>
        </div>

        <Nav className="justify-content-center flex-wrap gap-2 fw-semibold">
          <Nav.Link href="#">SHOP</Nav.Link>
          <Nav.Link href="#">SKILLS</Nav.Link>
          <Nav.Link href="#">STORIES</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
          <Nav.Link href="#">CONTACT US</Nav.Link>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;

