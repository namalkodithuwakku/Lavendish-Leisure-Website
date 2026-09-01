import type { Metadata } from "next";
import Link from "next/link";
import { ContactActions, MobileDock, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { hotels } from "@/lib/hotels";

export const metadata: Metadata = { title:"All Hotels | Lavendish Leisure Sri Lanka", description:"Explore all ten Lavendish Leisure hotels in Kataragama, Anuradhapura, Giritale, Unawatuna, Wasgamuwa, Wilpattu, Kandy and Dambulla." };

export default function HotelsPage(){
  return <main><SiteHeader/>
    <section className="inner-hero"><p className="eyebrow">THE LAVENDISH COLLECTION</p><h1>Ten hotels.<br/>Eight destinations.</h1><p>Find the setting that matches how you want to travel across Sri Lanka.</p></section>
    <section className="all-hotels">{hotels.map(h=><article className="hotel-list-card" key={h.slug}><Link className="hotel-list-image" href={`/hotels/${h.slug}`}><img src={h.image} alt={`${h.name}, ${h.destination}`}/></Link><div><p className="eyebrow purple">{h.destination} · {h.region}</p><h2>{h.name}</h2><p>{h.intro}</p><div className="tag-list">{h.experiences.map(x=><span key={x}>{x}</span>)}</div><div className="inline-actions"><Link href={`/hotels/${h.slug}`}>View hotel →</Link><a href={`tel:${h.phone}`}>Call hotel</a></div></div></article>)}</section>
    <section className="help-strip"><div><p className="eyebrow purple">PERSONAL RESERVATION SUPPORT</p><h2>Not sure which hotel to choose?</h2></div><ContactActions compact/></section>
    <SiteFooter/><MobileDock/>
  </main>;
}
