import Image from 'next/image';
import rcic from '../../public/assets/images/certifications/rcic-cicc-capic-accpi.png';
import { ExternalLinks } from '../../lib/external-links';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="py-16 lg:py-28 grid md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-5 container mx-auto px-5">
        <div>
          <h3 className="font-bold">Accreditation</h3>
          <p>Regulated Canadian Immigration Consultant (RCIC)</p>
          <p> Member in good standing of ICCRC</p>
          <p> Member of the CAPIC</p>
        </div>
        <div>
          <h3 className="font-bold">Important Links</h3>
          <a
            href={ExternalLinks.verifyRCIC}
            target="true"
            className="hover:underline block"
          >
            Verify RCIC
          </a>
          <a
            href={ExternalLinks.CRSScore}
            target="true"
            className="hover:underline block"
          >
            Latest CRS Score
          </a>
          <a
            href={ExternalLinks.CRSCalculator}
            target="true"
            className="hover:underline block"
          >
            CRS Calculator
          </a>
          <a
            href={ExternalLinks.processingTime}
            target="true"
            className="hover:underline block"
          >
            Check Processing Time
          </a>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <a href={`tel:+1-604-368-6092`} className="hover:underline block">
            +1-604-368-6092
          </a>
          <a
            href={`mailto:arialimmagtion@gmail.com`}
            className="hover:underline block"
          >
            arialimmagtion@gmail.com
          </a>
        </div>
        <Image src={rcic} alt={`Image for rcic logo`} width={350} />
      </div>
    </footer>
  );
};

export default Footer;
