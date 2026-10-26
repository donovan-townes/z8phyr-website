// Public destinations only. These embeds do not need API keys or DNS changes.
export const newsletter = {
  formId: 'feedbbfe7a',
  scriptUrl: 'https://cool-breeze.kit.com/feedbbfe7a/index.js',
  url: 'https://cool-breeze.kit.com/feedbbfe7a',
};

export const inquiries = {
  url: 'https://tally.so/r/9qe5Y5',
  embedUrl: 'https://tally.so/embed/9qe5Y5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
};

export const shop = {
  url: 'https://payhip.com/Z8phyRMusic',
  featuredProduct: {
    title: 'Melodic Breeze — Harmless Presets Vol. 1',
    price: '$12 USD',
    description: 'Shape your own melodic sound with 30 original Z8phyR Harmless presets. Includes an editable FL Studio demonstration project and MP3 preview. Licensed for use in your own personal and commercial music productions.',
    contents: [
      '30 original Harmless .fst presets',
      'Editable FL Studio demo project (.flp)',
      'Melodic Breeze Demo MP3',
      'Commercial music-use buyer license',
    ],
    compatibility: 'Requires compatible, licensed FL Studio and Harmless. Neither application nor plugin is included.',
    url: 'https://payhip.com/b/9L3OJ',
    demoUrl: 'https://soundcloud.com/z8phyr/melodic-breeze-demo',
  },
  freeProject: {
    title: 'A free project from Z8phyR',
    description: 'Take a closer look at the music with a free project download. Find the full details and get the ZIP on Payhip.',
    // Keep checkout separate from the product page so visitors can read the details first.
    url: 'https://payhip.com/b/frUxa',
    checkoutUrl: 'https://payhip.com/buy?link=frUxa',
  },
};
