import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactActions, MobileDock, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { hotelBySlug, hotels } from "@/lib/hotels";

export function generateStaticParams(){ return hotels.map(h=>({slug:h.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const h=hotelBySlug(slug); if(!h)return{}; return{title:`${h.name}, ${h.destination} | Lavendish Leisure`,description:h.intro}; }

export default async function HotelPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const h=hotelBySlug(slug); if(!h)notFound();
  const others=hotels.filter(x=>x.destination===h.destination&&x.slug!==h.slug).slice(0,2);
  return <main><SiteHeader/>
    <section className="property-hero"><img src={h.image} alt={`${h.name} in ${h.destination}`}/><div className="hero-shade"/><div className="property-title"><p className="eyebrow">{h.destination} · {h.region}</p><h1>{h.name}</h1><p>{h.experiences.join(" · ")}</p></div></section>
    <div className="property-action-wrap"><ContactActions hotel={h}/></div>
    <section className="property-intro"><div><p className="eyebrow purple">WELCOME TO {h.destination.toUpperCase()}</p><h2>A stay shaped by its place.</h2></div><div><p>{h.intro}</p><div className="tag-list">{h.experiences.map(x=><span key={x}>{x}</span>)}</div></div></section>
    <section className="highlight-section"><div className="section-title"><p className="eyebrow purple">WHY STAY HERE</p><h2>At a glance</h2></div><div className="highlight-grid">{h.highlights.map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div></section>
    <section className="gallery-section"><div className="section-title split"><div><p className="eyebrow purple">THE HOTEL</p><h2>A closer look</h2></div><p>Genuine imagery from Lavendish Leisure</p></div><div className="property-gallery">{h.gallery.map((image,i)=><img key={image+i} src={image} alt={`${h.name} view ${i+1}`}/>)}</div></section>
    <section className="location-contact"><div><p className="eyebrow purple">LOCATION & CONTACT</p><h2>{h.destination}</h2><p>{h.address}</p><a href={`tel:${h.phone}`}>{h.phoneDisplay}</a></div><div><h3>Plan your stay directly</h3><p>Call the hotel, message central reservations on WhatsApp or continue to the secure booking environment.</p><ContactActions hotel={h} compact/></div></section>
    {others.length>0&&<section className="nearby-hotels"><p className="eyebrow purple">MORE IN {h.destination.toUpperCase()}</p><h2>Continue exploring nearby</h2><div>{others.map(x=><Link href={`/hotels/${x.slug}`} key={x.slug}><img src={x.image} alt={x.name}/><span>{x.name} →</span></Link>)}</div></section>}
    <section className="property-final"><p className="eyebrow">YOUR {h.destination.toUpperCase()} STAY</p><h2>Ready when you are.</h2><ContactActions hotel={h} compact/></section>
    <SiteFooter/><MobileDock hotel={h}/>
  </main>;
}
