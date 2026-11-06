import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import { products, categories } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 1800);
  };

  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find((item) => item.id === product.id);
      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...previousCart, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to bag`);
  };

  const removeFromCart = (id) => {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  };

  const increment = (id) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <span className="hero-tag">SS26 STREET DROP</span>
          <h1>
            Dark essentials.
            <span> Built for the city.</span>
          </h1>
          <p>
            A curated streetwear kit — headphones, runners, watches, packs, and
            gear with a clean dark aesthetic.
          </p>
          <div className="hero-actions">
            <a href="#products" className="hero-button">
              Shop the drop
            </a>
            <button
              type="button"
              className="hero-ghost"
              onClick={() => setCartOpen(true)}
            >
              View bag ({cartCount})
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img src="/images/shoes.jpg" alt="Featured Apex Runner" />
            <div className="hero-card-meta">
              <span>Featured</span>
              <strong>Apex Runner</strong>
              <p>₹1,999</p>
            </div>
          </div>
          <div className="floating-card">Free returns · 7 days</div>
        </div>
      </section>

      <section className="features">
        <div>
          <strong>Express ship</strong>
          <small>2–4 day metro delivery</small>
        </div>
        <div>
          <strong>Secure checkout</strong>
          <small>Demo cart, no real payments</small>
        </div>
        <div>
          <strong>Curated drops</strong>
          <small>Only the pieces that earn a spot</small>
        </div>
        <div>
          <strong>Easy returns</strong>
          <small>Swap within a week</small>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span className="section-label">THE EDIT</span>
            <h2>Featured pieces</h2>
            <p>Filter by vibe. Search by name. Add to bag in one tap.</p>
          </div>

          <input
            type="search"
            placeholder="Search the drop…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search products"
          />
        </div>

        <div className="category-list" id="categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? "category-button active" : "category-button"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p className="empty-message">No pieces match that search.</p>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h2>SimpleShop.</h2>
            <p>Street essentials with a dark, quiet luxury feel.</p>
          </div>
          <div className="footer-meta">
            <p>Local demo shop · Vite + React</p>
            <p>© 2026 SimpleShop. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        cart={cart}
        totalPrice={totalPrice}
        onClose={() => setCartOpen(false)}
        onIncrement={increment}
        onDecrement={decrement}
        onRemove={removeFromCart}
        onClear={clearCart}
      />

      {toast ? <div className="toast">{toast}</div> : null}
    </div>
  );
}

export default App;
