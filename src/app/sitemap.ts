import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sw16moves.co.uk';

  // Static pages
  const routes = [
    '',
    '/quote',
    '/services',
    '/services/house-removals',
    '/services/single-item',
    '/services/long-distance',
    '/services/furniture-transport',
    '/gallery',
    '/reviews',
    '/contact',
    '/faq',
    '/areas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Area pages
  const areas = [
    'streatham', 'mitcham', 'brixton', 'tooting', 'croydon', 'norbury',
    'balham', 'clapham', 'dulwich', 'crystal-palace', 'thornton-heath', 'wimbledon'
  ];

  const areaRoutes = areas.map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...areaRoutes];
}
