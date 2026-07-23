function Header({ cartCount }) {
  return (
    <header className="topbar container py-4">
      <div className="brand-mark">
        <div className="brand-icon">FM</div>
        <div>
          <div className="brand-name">FreshMart</div>
          <div className="brand-tagline">Online Grocery Delivery</div>
        </div>
      </div>
      <nav className="nav-links d-none d-lg-flex">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#offers">Offers</a>
        <a href="#products">Products</a>
        <a href="#cart">Cart ({cartCount})</a>
      </nav>
    </header>
  );
}

export default Header;
