import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import TopBar from '../components/TopBar';
import FilterSidebar from '../components/FilterSidebar';
import axios from 'axios';
import { FaShoppingBag } from 'react-icons/fa';
import { useAuth } from '../contextApi/AuthContext'; // Import the useAuth hook
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // Use the useAuth hook to get the login status
  const { isLoggedIn } = useAuth();
   // To see the current login state in the console
  
  const handleOnClick = (item) => {
    console.log('Item clicked:', item.title);
    // You can handle Add to Cart logic here if required
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, categoryRes] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories'),
        ]);
        setAllProducts(productRes.data);
        setProducts(productRes.data);
        setCategories(categoryRes.data);
      } catch (err) {
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Dependency array is empty, runs only once on mount

  useEffect(() => {
    let filtered = selectedCategory
      ? allProducts.filter((p) => p.category === selectedCategory)
      : [...allProducts];

    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
  }, [selectedCategory, allProducts, sortOrder]);

  return (
    <Container fluid>
      <Row>
        {showFilter && (
          <Col md={2}>
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </Col>
        )}
        <Col md={showFilter ? 10 : 12}>
          <div className="bg-light p-4 mb-3 rounded text-center">
            <h2 className="mb-1">Discover Our Products</h2>
            <p className="text-muted">Browse through our amazing collection of items</p>
          </div>

          <TopBar
            toggleFilter={() => setShowFilter(!showFilter)}
            productCount={products.length}
            onSortChange={setSortOrder}
            isLoggedIn={isLoggedIn} // Pass login state to TopBar
          />

          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" variant="primary" />
              <p>Loading products...</p>
            </div>
          ) : (
            <Row className="mt-3">
              {products.map((p) => (
                <Col key={p.id} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-4">
                  <div className="product-card h-100 d-flex flex-column justify-content-between text-center p-3 shadow-sm rounded">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="img-fluid mb-2"
                      style={{ height: '150px', objectFit: 'contain' }}
                    />
                    <div className="fw-semibold small mb-1 text-truncate" title={p.title}>
                      {p.title}
                    </div>

                    {/* Conditional rendering for price */}
                    {isLoggedIn ? (
                      <div className="fw-bold text-primary mb-2">${p.price.toFixed(2)}</div>
                    ) : (
                      <div className="text-muted small mb-2">
                        Sign in or Create an account to see pricing
                      </div>
                    )}

                    <button
                      className="btn btn-outline-primary btn-sm mt-auto"
                      onClick={() => handleOnClick(p)} // Trigger handleAddToCart
                    >
                      <FaShoppingBag className="me-2" />
                      Add to Cart
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
