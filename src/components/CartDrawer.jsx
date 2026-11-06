import React, { useEffect, useState } from "react";

function CartDrawer({
  open,
  cart,
  totalPrice,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
}) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [lastTotal, setLastTotal] = useState(0);
  const [lastCount, setLastCount] = useState(0);

  useEffect(() => {
    if (!open) {
      setOrderPlaced(false);
    }
  }, [open]);

  const count = cart.reduce((n, i) => n + i.quantity, 0);
  const itemLabel = count === 1 ? "1 item" : `${count} items`;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setLastTotal(totalPrice);
    setLastCount(count);
    setOrderPlaced(true);
    onClear();
  };

  const handleContinue = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <>
      <div
        className={`cart-overlay ${open ? "open" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`cart-drawer ${open ? "open" : ""}`}
        aria-hidden={!open}
        aria-label="Shopping bag"
      >
        <div className="cart-drawer-header">
          <div>
            <p className="cart-kicker">Your bag</p>
            <h2>{orderPlaced ? "Order confirmed" : itemLabel}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close bag">
            ✕
          </button>
        </div>

        <div className="cart-drawer-body">
          {orderPlaced ? (
            <div className="order-success">
              <div className="order-success-icon" aria-hidden="true">
                ✓
              </div>
              <h3>Demo order placed</h3>
              <p>
                Thanks — this is a demo checkout only. No payment was taken.
              </p>
              <p className="order-success-meta">
                {lastCount === 1 ? "1 item" : `${lastCount} items`} · ₹
                {lastTotal.toLocaleString("en-IN")}
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">◎</div>
              <h3>Bag is empty</h3>
              <p>Add a drop from the shop to get started.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                  <div className="qty-row">
                    <button type="button" onClick={() => onDecrement(item.id)} aria-label="Decrease quantity">
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onIncrement(item.id)} aria-label="Increase quantity">
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer-footer">
          {orderPlaced ? (
            <button type="button" className="checkout-button" onClick={handleContinue}>
              Keep shopping
            </button>
          ) : (
            <>
              <div className="cart-total-row">
                <span>Subtotal</span>
                <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
              </div>
              <p className="cart-note">Shipping calculated at checkout (demo).</p>
              <button
                type="button"
                className="checkout-button"
                disabled={cart.length === 0}
                onClick={handleCheckout}
              >
                Checkout
              </button>
              {cart.length > 0 ? (
                <button type="button" className="clear-button" onClick={onClear}>
                  Clear bag
                </button>
              ) : null}
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
