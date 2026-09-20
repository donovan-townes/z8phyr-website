import type { Metadata } from 'next';
import { ArtistHome } from './artist-home';
export const metadata: Metadata = {
 title: 'Z8phyR — Music, project files & journal',
 description: 'Enter the world of Z8phyR. Music, sessions, and notes from the studio.',
 icons: { icon: '/brand/z8phyr-icon.png', shortcut: '/brand/z8phyr-icon.png' },
};
export default function Home() { return <ArtistHome />; }
