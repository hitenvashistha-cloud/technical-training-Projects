import { formatINR } from '../utils/currency';

function HeroSection({ featuredProduct, onAddToCart }) {
  return (
    <section className="hero-grid">
      <div className="hero-copy">
        <span className="eyebrow">Fresh groceries delivered fast</span>
        <h1>Shop farm-fresh essentials from a delivery-first grocery store.</h1>
        <p>
          Browse seasonal produce, bakery favorites, dairy, beverages, and daily staples.
          Filter products, inspect item details, and manage your cart in one smooth flow.
        </p>
        <div className="hero-stats">
          <div>
            <strong>25 min</strong>
            <span>avg delivery</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>daily orders</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>customer rating</span>
          </div>
        </div>
        <div className="hero-actions">
          <a className="btn btn-success btn-lg" href="#products">
            Shop Now
          </a>
          <a className="btn btn-outline-light btn-lg" href="#offers">
            View Offers
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Featured product summary">
        <div className="hero-card">
          <div className="hero-image-wrap">
            <img className="hero-image" src={featuredProduct.image} alt={featuredProduct.name} />
          </div>
          <span className="mini-badge">Featured Item</span>
          <h2>{featuredProduct.name}</h2>
          <p>{featuredProduct.description}</p>
          <div className="hero-card-meta">
            <span>{featuredProduct.category}</span>
            <span>{featuredProduct.unit}</span>
            <span>⭐ {featuredProduct.rating}</span>
          </div>
          <div className="price-row">
            <strong>{formatINR.format(featuredProduct.price)}</strong>
            <button className="btn btn-warning" onClick={() => onAddToCart(featuredProduct)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
