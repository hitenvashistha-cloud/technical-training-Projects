function CategorySection({ categories, activeCategory, onSelectCategory }) {
  return (
    <section className="section-block" id="categories">
      <div className="section-heading">
        <h3>Categories</h3>
        <p>Quickly narrow the catalog to the products you need.</p>
      </div>
      <div className="category-strip">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-pill ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
