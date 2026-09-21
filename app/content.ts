// Z8phyR's catalog, external store links, and newsletter archive.
export type Release = { slug: string; title: string; artist: string; year: number; format: string; artwork?: string; listenUrl: string; projectUrl?: string };
export type Product = { title: string; description: string; url: string; image?: string };
export type Letter = { slug: string; title: string; date: string; body: string };
export const releases: Release[] = [];
export const products: Product[] = [];
export const letters: Letter[] = [];
