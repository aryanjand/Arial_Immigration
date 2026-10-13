import type { NextApiRequest, NextApiResponse } from 'next';
import { buildSitemapXml } from '../../lib/sitemap';

const sitemap = (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate'
  );
  res.status(200).send(buildSitemapXml());
};

export default sitemap;
