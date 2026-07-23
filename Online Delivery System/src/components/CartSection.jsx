import { formatINR } from '../utils/currency';

function CartSection({ cart, subtotal, deliveryFee, total, onUpdateQuantity }) {
  return (
    <section className="section-block" id="cart">
      <div className="section-heading">
        <h3>Shopping Cart</h3>
        <p>Review quantities and totals before checkout.</p>
      </div>
      <div className="cart-card">
        {cart.length === 0 ? (
          <div className="empty-state">
            <h4>Your cart is empty</h4>
            <p>Add groceries from the product grid to see the cart update instantly.</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.category}</p>
                  </div>
                  <div className="cart-controls">
                    <span>{formatINR.format(item.price * item.quantity)}</span>
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                      <strong>{item.quantity}</strong>
                      <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>{formatINR.format(subtotal)}</strong>
              </div>
              <div>
                <span>Delivery Fee</span>
                <strong>{formatINR.format(deliveryFee)}</strong>
              </div>
              <div className="total-row">
                <span>Total</span>
                <strong>{formatINR.format(total)}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CartSection;
