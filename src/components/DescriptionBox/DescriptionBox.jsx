import React from 'react'
import "./DescriptionBox.css"

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is a digital platform that facilitates the buying and selling of goods and services over the internet. These websites serve as virtual storefronts where businesses can list their products with detailed descriptions, images, and prices, while customers can browse, add items to a shopping cart, and complete transactions through a secure checkout process. E-commerce websites integrate payment gateways for processing various payment methods, and often include features such as user accounts for tracking orders, customer reviews for informed purchasing, and inventory management for sellers.
        </p>
        <p>
          Additionally, these platforms often incorporate marketing tools to run promotions and optimize search engine visibility, thereby enhancing customer engagement and driving sales. Popular examples include Amazon, eBay, and Shopify-based stores, all of which exemplify the transformative impact of e-commerce on modern retail.
        </p>
      </div>
    </div>
  )
}
