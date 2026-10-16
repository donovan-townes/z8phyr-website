// Destinations supplied in the artist's EPK; replace here when updated.
export const artistLinks = {
 instagram: 'https://instagram.com/z8phyr',
 youtube: 'https://youtube.com/@z8phyr',
 facebook: 'https://facebook.com/z8phyr',
 x: 'https://x.com/z8phyr',
 beatport: 'https://www.beatport.com/artist/z8phyr/617100',
 apple: 'https://music.apple.com/za/artist/z8phyr/1163460449',
 soundcloud: 'https://soundcloud.com/z8phyr',
 spotify: 'https://open.spotify.com/artist/03cOmqTQ8PbUeqBAClCHM7',
 bandcamp: 'https://z8phyr.bandcamp.com',
 patreon: 'https://patreon.com/z8phyr',
 guestbook: '',
 creatorPlaylist: 'https://soundcloud.com/z8phyr/sets/creator-safe',
 creatorTerms: '',
};
export type FeaturedRelease = {title:string; description:string; artwork?:string; listenUrl:string; audioUrl?:string; embedUrl?:string};
// Set the confirmed latest release here. An empty value keeps an honest player space.
export const featuredRelease: FeaturedRelease | null = {
 title: 'Reverie',
 description: 'Melodic progressive house · Cool Breeze Records · CB2602',
 listenUrl: 'https://go.protonradio.com/r/rlOdKmvsn1sM8',
};
