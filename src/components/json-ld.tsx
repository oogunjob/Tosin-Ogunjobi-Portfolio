export function JsonLd() {
  const structuredData = [{
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tosin Ogunjobi',
    givenName: 'Tosin',
    familyName: 'Nayak',
    url: 'https://www.tosinogunjobi.com',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed'
    },
    sameAs: [
      'https://github.com/Star-Knight',
      'https://www.linkedin.com/in/Tosin-nayak-1b5b3b1b0/',
      'https://twitter.com/oogunjob'
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Full Stack Development'
    ],
    description: 'Tosin Ogunjobi is a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Creating modern web applications with clean, efficient code.'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tosin Ogunjobi',
    url: 'https://www.tosinogunjobi.com',
    description: 'Portfolio and blog of Tosin Ogunjobi, Full Stack Developer',
    potentialAction: {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://www.tosinogunjobi.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Main Navigation',
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Projects',
        description: 'Featured development projects and work',
        url: 'https://www.tosinogunjobi.com/projects'
      },
      {
        '@type': 'WebPage',
        name: 'Blog',
        description: 'Technical articles and tutorials',
        url: 'https://www.tosinogunjobi.com/blog'
      },
      {
        '@type': 'WebPage',
        name: 'Gadgets',
        description: 'Tech gadgets and reviews',
        url: 'https://www.tosinogunjobi.com/gadgets'
      },
      {
        '@type': 'WebPage',
        name: 'CLI',
        description: 'Command line interface projects',
        url: 'https://www.tosinogunjobi.com/cli'
      }
    ]
  }];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
