import Link from 'next/link';
import { COMPANY_PHONE } from '../../lib/site';

const MobileContactBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 flex border-t border-neutral-200 bg-white lg:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href={`tel:${COMPANY_PHONE}`}
        className="flex-1 py-3.5 text-center font-medium"
      >
        Call
      </a>
      <Link
        href="/contact"
        className="flex-1 bg-black py-3.5 text-center font-medium text-white"
      >
        Contact
      </Link>
    </div>
  );
};

export default MobileContactBar;
