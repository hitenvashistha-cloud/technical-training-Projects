import { useMemo, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import OfferSection from './components/OfferSection';
import ProductSection from './components/ProductSection';
import CartSection from './components/CartSection';
import { categories, offers, products } from './data/catalog';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const selectedProduct = useMemo(() => {
    return products.find((product) => product.id === selectedProductId) ?? products[0];
  }, [selectedProductId]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 49;
  const total = subtotal + deliveryFee;

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);
      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app-shell">
      <Header cartCount={cartCount} />

      <main className="container pb-5" id="home">
        <HeroSection featuredProduct={selectedProduct} onAddToCart={addToCart} />
        <CategorySection
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <OfferSection offers={offers} />
        <ProductSection
          filteredProducts={filteredProducts}
          selectedProduct={selectedProduct}
          selectedProductId={selectedProductId}
          onSelectProduct={setSelectedProductId}
          onAddToCart={addToCart}
        />
        <CartSection
          cart={cart}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          total={total}
          onUpdateQuantity={updateQuantity}
        />
      </main>
    </div>
  );
}

export default App;
