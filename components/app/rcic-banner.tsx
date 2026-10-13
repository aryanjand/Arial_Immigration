import { ExternalLinks } from '../../lib/external-links';
import { CONSULTANT_NAME, RCIC_LICENCE_NUMBER } from '../../lib/site';

const RcicBanner = () => {
  return (
    <div className="mb-4 flex flex-col gap-2 border-b border-neutral-200 pb-3 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p>
        {CONSULTANT_NAME}, RCIC
        {RCIC_LICENCE_NUMBER ? ` · College ID ${RCIC_LICENCE_NUMBER}` : ''}
        {' · '}
        Licensed by CICC
      </p>
      <a
        href={ExternalLinks.verifyRCIC}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:no-underline"
      >
        Verify this RCIC
      </a>
    </div>
  );
};

export default RcicBanner;
