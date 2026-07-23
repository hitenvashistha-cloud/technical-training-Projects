function OfferSection({ offers }) {
  return (
    <section className="section-block" id="offers">
      <div className="section-heading">
        <h3>Offers</h3>
        <p>Promotions that keep shopping simple and affordable.</p>
      </div>
      <div className="offer-grid">
        {offers.map((offer) => (
          <article key={offer.title} className={`offer-card ${offer.accent}`}>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OfferSection;
