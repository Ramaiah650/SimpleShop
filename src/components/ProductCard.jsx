import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-category">{product.category}</span>
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
      </div>

      <div className="product-info">
        <div className="product-rating">
          <span aria-hidden="true">★</span> {product.rating}
        </div>

        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <button
            type="button"
            className="add-button"
            onClick={() => addToCart(product)}
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
