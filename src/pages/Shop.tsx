import React from 'react';
import Container from '../components/Container';

export interface ShopProps {}

const Shop: React.FC = () => {
  return (
    <Container maxWidth="1200px" >
      <h1>Hello from Shop Page</h1>
    </Container>
  );
};

export default Shop;
