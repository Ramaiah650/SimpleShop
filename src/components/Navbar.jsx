import React from "react";

function Navbar({ cartCount, onOpenCart }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          Simple<span>Shop</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Shop</a>
          <a href="#categories">Categories</a>
        </div>

        <button type="button" className="cart-button" onClick={onOpenCart}>
          <span className="cart-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.2" fill="currentColor" />
              <circle cx="18" cy="20" r="1.2" fill="currentColor" />
            </svg>
          </span>
          Bag
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
