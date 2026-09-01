const hotels = [
  { name: "Grand Tamarind Lake", place: "Kataragama", image: "https://lavendishleisure.com/wp-content/uploads/2024/07/grand_tamarind_lake_hotel_cover.jpg", tags: "Family · Wildlife · Pilgrimage" },
  { name: "Lavendish Okrin", place: "Kataragama", image: "https://lavendishleisure.com/wp-content/uploads/2025/06/lavendish-okrin-hotel-1.jpg", tags: "Lakeside · Family · Yala gateway" },
  { name: "Lavendish Beach Resort", place: "Unawatuna", image: "https://lavendishleisure.com/wp-content/uploads/2025/06/lavendish-beach-resort.jpg", tags: "Beach · Couples · Family" },
];
const experiences = ["Family breaks", "Wildlife", "Pilgrimage & culture", "Beach", "Lakeside", "Hill country"];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Lavendish Leisure home"><span className="brand-mark">L</span><span><strong>Lavendish Leisure</strong><small>Hotels & Resorts</small></span></a>
      <nav aria-label="Primary navigation"><a href="#hotels">Hotels</a><a href="#offers">Offers</a><a href="#experiences">Experiences</a></nav>
      <a className="header-book" href="#booking">Book direct</a>
    </header>

    <section className="hero" id="top">
      <img src="https://lavendishleisure.com/wp-content/uploads/2024/07/grand_tamarind_lake_hotel_cover.jpg" alt="Guests enjoying the pool and green landscape at Grand Tamarind Lake, Kataragama" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">Ten hotels · Eight Sri Lankan destinations</p>
        <h1>Your island.<br />Your kind of stay.</h1>
        <p className="hero-copy">From family weekends and sacred journeys to wild landscapes, lakes and the southern coast.</p>
        <div className="hero-actions"><a className="primary" href="#booking">Find a stay</a><a className="ghost" href="#offers">View local offers</a></div>
      </div>
      <div className="trust-strip"><span><strong>10</strong> hotels</span><span><strong>8</strong> destinations</span><span><strong>1</strong> Sri Lankan journey</span></div>
    </section>

    <section className="booking-panel" id="booking" aria-label="Find a Lavendish stay">
      <div className="booking-heading"><small>PLAN YOUR STAY</small><strong>Where would you like to go?</strong></div>
      <label><span>Destination or hotel</span><select defaultValue=""><option value="" disabled>Choose your stay</option><option>Kataragama</option><option>Kandy</option><option>Unawatuna</option><option>Anuradhapura</option><option>Dambulla</option></select></label>
      <label><span>Check-in</span><input type="date" /></label><label><span>Check-out</span><input type="date" /></label>
      <label><span>Guests</span><select defaultValue="2 Adults"><option>2 Adults</option><option>1 Adult</option><option>Family</option></select></label>
      <button type="button">Check availability <span>→</span></button>
    </section>

    <section className="intro" id="offers">
      <div><p className="eyebrow purple">FOR SRI LANKAN TRAVELLERS</p><h2>A better break,<br />closer than you think.</h2></div>
      <div><p>Plan a weekend, family holiday or meaningful journey with clear stay options, direct assistance and hotels across the island.</p><a className="text-link" href="#hotels">Explore all hotels →</a></div>
    </section>

    <section className="experience-section" id="experiences">
      <div className="section-title"><p className="eyebrow purple">CHOOSE BY EXPERIENCE</p><h2>What does your next stay feel like?</h2></div>
      <div className="experience-row">{experiences.map((item, index) => <a href="#hotels" className="experience-chip" key={item}><span>0{index + 1}</span>{item}</a>)}</div>
    </section>

    <section className="hotel-section" id="hotels">
      <div className="section-title split"><div><p className="eyebrow purple">POPULAR RIGHT NOW</p><h2>Find your Lavendish</h2></div><a className="text-link" href="#">View all 10 hotels →</a></div>
      <div className="hotel-grid">{hotels.map((hotel, index) => <article className={index === 0 ? "hotel-card featured" : "hotel-card"} key={hotel.name}>
        <img src={hotel.image} alt={`${hotel.name} in ${hotel.place}`} /><div className="card-shade" />
        <div className="hotel-content"><p>{hotel.place}</p><h3>{hotel.name}</h3><span>{hotel.tags}</span><div><a href="#">View hotel</a><a href="#booking">Check rates →</a></div></div>
      </article>)}</div>
    </section>

    <section className="journey-banner"><div><p className="eyebrow">FIND YOUR LAVENDISH</p><h2>One trip. More of Sri Lanka.</h2><p>Choose your interests and build a smooth multi-hotel journey for family, culture, wildlife and the coast.</p></div><a href="/find-your-lavendish/">Plan my journey →</a></section>
    <footer><div className="brand light"><span className="brand-mark">L</span><span><strong>Lavendish Leisure</strong><small>Hotels & Resorts</small></span></div><p>Direct reservations and travel assistance across Sri Lanka.</p><a href="tel:+94752200202">+94 75 220 0202</a></footer>
    <div className="mobile-dock"><a href="#hotels">Hotels</a><a href="#offers">Offers</a><a className="dock-book" href="#booking">Book</a><a href="#experiences">Explore</a><a href="tel:+94752200202">Call</a></div>
  </main>;
}
