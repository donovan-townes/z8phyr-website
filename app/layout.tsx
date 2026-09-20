import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Z8phyR — One tune at a time',
 description: 'Melodic progressive house from Z8phyR. Music, creator-safe tracks, project files, and notes from the studio.',
 icons: { icon: '/brand/z8phyr-icon.png' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="en"><body>{children}</body></html>;
}
