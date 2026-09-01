import Link from "next/link";
import { groupContact, Hotel, whatsappLink } from "@/lib/hotels";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Lavendish Leisure home"><span className="brand-mark">L</span><span><strong>Lavendish Leisure</strong><small>Hotels & Resorts</small></span></Link>
    <nav aria-label="Primary navigation"><Link href="/hotels">Hotels</Link><Link href="/#experiences">Experiences</Link><Link href="/#offers">Offers</Link><Link href="/contact">Contact</Link></nav>
    <a className="header-book" href={groupContact.bookingUrl}>Book direct</a>
  </header>;
}

export function ContactActions({ hotel, compact=false }: { hotel?: Hotel; compact?: boolean }) {
  const phone = hotel?.phone || groupContact.hotline;
  return <div className={compact ? "contact-actions compact" : "contact-actions"}>
    <a className="action-call" href={`tel:${phone}`}><small>CALL</small><strong>{hotel?.phoneDisplay || groupContact.hotlineDisplay}</strong></a>
    <a className="action-wa" href={whatsappLink(hotel)} target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>Chat with reservations</strong></a>
    <a className="action-book" href={groupContact.bookingUrl}><small>BEST AVAILABLE RATE</small><strong>Book now →</strong></a>
  </div>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div><div className="brand light"><span className="brand-mark">L</span><span><strong>Lavendish Leisure</strong><small>Hotels & Resorts</small></span></div><p>Ten distinctive hotels across eight Sri Lankan destinations.</p></div>
    <div><h4>Explore</h4><Link href="/hotels">All hotels</Link><Link href="/#experiences">Experiences</Link><Link href="/#offers">Offers</Link></div>
    <div><h4>Reservations</h4><a href={`tel:${groupContact.hotline}`}>{groupContact.hotlineDisplay}</a><a href={whatsappLink()}>WhatsApp</a><a href={`mailto:${groupContact.email}`}>{groupContact.email}</a></div>
    <div><h4>Head office</h4><p>No. 12, Level 5,<br/>Dehiwala Road, Maharagama</p><Link href="/contact">Contact us →</Link></div>
  </footer>;
}

export function MobileDock({ hotel }: { hotel?: Hotel }) {
  return <div className="mobile-dock"><Link href="/hotels">Hotels</Link><a href={`tel:${hotel?.phone || groupContact.hotline}`}>Call</a><a className="dock-book" href={groupContact.bookingUrl}>Book</a><a href={whatsappLink(hotel)}>WhatsApp</a><Link href="/contact">Contact</Link></div>;
}
