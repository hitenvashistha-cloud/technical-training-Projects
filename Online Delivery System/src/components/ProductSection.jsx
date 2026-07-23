import { formatINR } from '../utils/currency';

function ProductSection({ filteredProducts, selectedProduct, selectedProductId, onSelectProduct, onAddToCart }) {
  return (
    <section className="section-block product-layout" id="products">
      <div>
        <div className="section-heading">
          <h3>Product Details & Filtering</h3>
          <p>Click a card to inspect more details, then add it straight to your cart.</p>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className={`product-card ${selectedProductId === product.id ? 'selected' : ''}`}
              onClick={() => onSelectProduct(product.id)}
            >
              <div className="product-image-wrap">
                <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
              </div>
              <span className="product-badge">{product.badge}</span>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div className="product-meta">
                <span>{product.category}</span>
                <span>⭐ {product.rating}</span>
              </div>
              <div className="product-footer">
                <strong>{formatINR.format(product.price)}</strong>
                <button
                  className="btn btn-sm btn-success"
                  onClick={(event) => {
                    event.stopPropagation();
                    onAddToCart(product);
                  }}
                >
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="detail-panel">
        <div className="section-heading">
          <h3>Product Detail</h3>
          <p>Selected item preview with quick purchase action.</p>
        </div>
        <div className="detail-card">
          <div className="detail-image-wrap">
            <img className="detail-image" src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          <span className="mini-badge">{selectedProduct.badge}</span>
          <h4>{selectedProduct.name}</h4>
          <p>{selectedProduct.description}</p>
          <ul>
            {selectedProduct.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="detail-meta">
            <span>{selectedProduct.category}</span>
            <span>{selectedProduct.unit}</span>
            <span>{selectedProduct.rating}</span>
          </div>
          <div className="price-row">
            <strong>{formatINR.format(selectedProduct.price)}</strong>
            <button className="btn btn-warning" onClick={() => onAddToCart(selectedProduct)}>
              Add to Cart
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default ProductSection;
