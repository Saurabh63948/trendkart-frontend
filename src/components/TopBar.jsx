import React, { useState } from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';

const TopBar = ({ toggleFilter, productCount, onSortChange }) => {
  const [sortLabel, setSortLabel] = useState('Recommended'); // State to track the current sorting label

  // Handle sorting change and update the label accordingly
  const handleSortChange = (sortType) => {
    onSortChange(sortType);
    if (sortType === 'lowToHigh') {
      setSortLabel('Price: Low to High');
    } else if (sortType === 'highToLow') {
      setSortLabel('Price: High to Low');
    }
  };

  return (
    <Row className="align-items-center py-3 border-bottom">
      {/* Left Side */}
      <Col xs={12} md={6} className="mb-2 mb-md-0 text-center text-md-start">
        <span>{productCount} Items</span> &nbsp; | &nbsp;
        <button className="btn btn-link p-0" onClick={toggleFilter}>
          Show Filter
        </button>
      </Col>

      {/* Right Side */}
      <Col xs={12} md={6} className="text-center text-md-end">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="sort-dropdown">
            {sortLabel} {/* Display the current sorting label */}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortChange('lowToHigh')}>Price: Low to High</Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortChange('highToLow')}>Price: High to Low</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default TopBar;

