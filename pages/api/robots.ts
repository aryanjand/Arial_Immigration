import type { NextApiRequest, NextApiResponse } from 'next';
import { buildRobotsTxt } from '../../lib/sitemap';

const robots = (_req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate'
  );
  res.status(200).send(buildRobotsTxt());
};

export default robots;
