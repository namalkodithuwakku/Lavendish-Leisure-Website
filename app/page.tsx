import Link from "next/link";
import { ContactActions, MobileDock, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { hotels } from "@/lib/hotels";

const experiences = ["Family breaks","Wildlife & safari","Pilgrimage & culture","Beach stays","Lakeside calm","Hill country"];

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="hero" id="top">
      <img src={hotels[0].image} alt="Guests enjoying the pool and green landscape at Grand Tamarind Lake, Kataragama" />
      <div className="hero-shade" />
      <div className="hero-content"><p className="eyebrow">TEN HOTELS · EIGHT SRI LANKAN DESTINATIONS</p><h1>Your island.<br/>Your kind of stay.</h1><p className="hero-copy">From family weekends and sacred journeys to wild landscapes, tranquil lakes, storied hills and the southern coast.</p><div className="hero-actions"><a className="primary" href="#booking">Find a stay</a><Link className="ghost" href="/hotels">Our hotels</Link></div></div>
      <div className="trust-strip"><span><strong>10</strong> hotels</span><span><strong>8</strong> destinations</span><span><strong>1</strong> Sri Lankan journey</span></div>
    </section>
    <section className="booking-wrap" id="booking"><ContactActions /></section>

    <section className="intro" id="offers"><div><p className="eyebrow purple">MADE FOR SRI LANKAN GETAWAYS</p><h2>A better break,<br/>closer than you think.</h2></div><div><p>Plan a weekend, school holiday, pilgrimage or family journey with clear options, direct assistance and Lavendish stays across the island.</p><Link className="text-link" href="/hotels">Explore all hotels →</Link></div></section>

    <section className="experience-section" id="experiences"><div className="section-title"><p className="eyebrow purple">CHOOSE BY EXPERIENCE</p><h2>What does your next stay feel like?</h2></div><div className="experience-row">{experiences.map((item,index)=><Link href="/hotels" className="experience-chip" key={item}><span>0{index+1}</span>{item}</Link>)}</div></section>

    <section className="hotel-section" id="hotels"><div className="section-title split"><div><p className="eyebrow purple">THE LAVENDISH COLLECTION</p><h2>Ten places to call yours</h2></div><Link className="text-link" href="/hotels">View the complete collection →</Link></div>
      <div className="collection-grid">{hotels.map((hotel)=><article className="collection-card" key={hotel.slug}><Link href={`/hotels/${hotel.slug}`}><img src={hotel.image} alt={`${hotel.name} in ${hotel.destination}`}/><div className="card-shade"/><div className="hotel-content"><p>{hotel.destination}</p><h3>{hotel.name}</h3><span>{hotel.experiences.slice(0,3).join(" · ")}</span><b>Explore hotel →</b></div></Link></article>)}</div>
    </section>

    <section className="journey-banner"><div><p className="eyebrow">FIND YOUR LAVENDISH</p><h2>One trip. More of Sri Lanka.</h2><p>Combine culture, wildlife, hills and the coast into one smooth multi-hotel journey.</p></div><a href="https://findyourlavendish.vercel.app/">Plan my journey →</a></section>
    <section className="help-strip"><div><p className="eyebrow purple">NEED A HUMAN TOUCH?</p><h2>Let our reservations team plan it with you.</h2></div><ContactActions compact /></section>
    <SiteFooter/><MobileDock/>
  </main>;
}
