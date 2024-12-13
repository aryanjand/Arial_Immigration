import Image from 'next/image';
import Link from 'next/link';
import rcic from '../../public/assets/images/certifications/rcic-cicc-capic-accpi.png';

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
          <Link
            href={
              'https://college-ic.ca/protecting-the-public/find-an-immigration-consultant'
            }
            target="true"
            className="hover:underline block"
          >
            Verify RCIC
          </Link>
          <Link
            href={
              'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html'
            }
            target="true"
            className="hover:underline block"
          >
            Latest CRS Score
          </Link>
          <Link
            href={
              'https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp'
            }
            target="true"
            className="hover:underline block"
          >
            CRS Calculator
          </Link>
          <Link
            href={
              'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'
            }
            target="true"
            className="hover:underline block"
          >
            Check Processing Time
          </Link>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <Link
            href={`tel:${process.env.PHONE_NUMBER}`}
            className="hover:underline block"
          >
            +1-604-368-6092
          </Link>
          <Link
            href={`mailto:${process.env.EMAIL}`}
            className="hover:underline block"
          >
            arialimmagtion@gmail.com
          </Link>
        </div>
        <Image src={rcic} alt={`Image for rcic logo`} width={350} />
      </div>
    </footer>
  );
};

export default Footer;
