import Image from 'next/image';
import Link from 'next/link';
import rcic from '../../public/assets/images/certifications/rcic-cicc-capic-accpi.png';
import { ExternalLinks } from '../../lib/external-links';
import {
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_PHONE_DISPLAY,
  CONSULTANT_NAME,
  RCIC_LICENCE_NUMBER,
  REGULATOR_NAME,
} from '../../lib/site';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 pb-20 lg:pb-0">
      <div className="py-12 lg:py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 container mx-auto px-5">
        <div>
          <h3 className="font-bold mb-2">Accreditation</h3>
          <p>Regulated Canadian Immigration Consultant (RCIC)</p>
          <p>
            {CONSULTANT_NAME}
            {RCIC_LICENCE_NUMBER ? ` · College ID ${RCIC_LICENCE_NUMBER}` : ''}
          </p>
          <p>Licensed by the {REGULATOR_NAME}</p>
          <p>Member of CAPIC</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Important Links</h3>
          <a
            href={ExternalLinks.verifyRCIC}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block py-1"
          >
            Verify this RCIC
          </a>
          <a
            href={ExternalLinks.CRSScore}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block py-1"
          >
            Latest CRS Score
          </a>
          <a
            href={ExternalLinks.CRSCalculator}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block py-1"
          >
            CRS Calculator
          </a>
          <a
            href={ExternalLinks.processingTime}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline block py-1"
          >
            Check Processing Time
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact Us</h3>
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="hover:underline block py-1"
          >
            {COMPANY_PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="hover:underline block py-1 break-all"
          >
            {COMPANY_EMAIL}
          </a>
          <Link href="/services" className="hover:underline block py-1">
            Our Services
          </Link>
          <Link href="/contact" className="hover:underline block py-1">
            Send an inquiry
          </Link>
          <Link href="/privacy-policy" className="hover:underline block py-1">
            Privacy Policy
          </Link>
          <Link href="/terms-conditions" className="hover:underline block py-1">
            Terms and Conditions
          </Link>
        </div>
        <Image
          src={rcic}
          alt="RCIC, CICC, and CAPIC accreditation logos"
          width={350}
          className="w-full max-w-xs h-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
