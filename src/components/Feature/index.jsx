import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
  
      <h1 style={{fontFamily: 'Roboto Condensed'}}>Coffee of the Day</h1>
      <p  style={{fontFamily: 'Roboto Condensed'}}> CAFÉ MOCHA Chocolate Powder, Dark Roasted Coffee Beans, Skimmed Milk, Whipped Cream</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;