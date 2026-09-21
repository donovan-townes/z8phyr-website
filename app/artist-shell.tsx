import Link from 'next/link';
import { Mail } from 'lucide-react';
import { artistLinks } from './artist-content';
import { shop } from './integrations';

export function ArtistHeader({ page = 'home' }: { page?: 'home' | 'work' }) {
  const home = page === 'home' ? '' : '/';
  return (
    <header className="znav">
      <Link href="/" className="zbrand" aria-label="Z8phyR home">
        <img src="/brand/z8phyr-white.svg" width="340" height="106" alt="Z8phyR" />
      </Link>
      <nav aria-label="Main navigation">
        <Link href={`${home}#latest`}>Music</Link>
        <Link href={`${home}#about`}>About</Link>
        <Link href="/work-with-me" aria-current={page === 'work' ? 'page' : undefined}>Work With Me</Link>
        <a href={shop.url}>Shop ↗</a>
      </nav>
      <Link className="znav-end" href={`${home}#newsletter`}>
        <Mail size={16} aria-hidden="true" /> Join the Breeze
      </Link>
    </header>
  );
}

const socials = [
  { name: 'Instagram', url: artistLinks.instagram, icon: 'instagram' },
  { name: 'YouTube', url: artistLinks.youtube, icon: 'youtube' },
  { name: 'Facebook', url: artistLinks.facebook, icon: 'facebook' },
  { name: 'X', url: artistLinks.x, icon: 'x' },
  { name: 'SoundCloud', url: artistLinks.soundcloud, icon: 'soundcloud' },
  { name: 'Spotify', url: artistLinks.spotify, icon: 'spotify' },
  { name: 'Apple Music', url: artistLinks.apple, icon: 'applemusic' },
  { name: 'Bandcamp', url: artistLinks.bandcamp, icon: 'bandcamp' },
  { name: 'Beatport', url: artistLinks.beatport, icon: 'beatport' },
  { name: 'Patreon', url: artistLinks.patreon, icon: 'patreon' },
];

export function ArtistFooter() {
  return (
    <footer className="zfooter zfooter-expanded">
      <div className="zfooter-top">
        <Link href="/" className="zbrand" aria-label="Z8phyR home">
          <img src="/brand/z8phyr-white.svg" width="340" height="106" alt="Z8phyR" />
        </Link>
        <div>
          <p>Have you found me on my other socials?</p>
          <div className="zsocials">
            {socials.map(({ name, url, icon }) => (
              <a key={name} href={url} aria-label={`Z8phyR on ${name}`} title={name}>
                <img src={`/socials/${icon}.svg`} alt="" width="20" height="20" /><span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="zfooter-bottom">
        <span>© {new Date().getFullYear()} Z8phyR · Love. Peace. Music.</span>
        <Link href="/work-with-me">Work With Me</Link>
        <a href={shop.url}>Shop ↗</a>
        <Link href="/#newsletter">Join the Breeze</Link>
        <a href="#z-main">Back to the top ↑</a>
      </div>
    </footer>
  );
}
