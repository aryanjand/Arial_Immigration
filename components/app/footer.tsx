import Container from '../shared/not-in-use/container';
import Image from 'next/image';
import rcic from '../../public/assets/images/certifications/rcic-cicc-capic-accpi.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 grid lg:grid-cols-4 justify-center items-start gap-5">
          <div>
            <h3 className="font-bold">Accreditations</h3>
            <p>Regulated Canadian Immigration Consultant (RCIC)</p>
            <p> Member in good standing of ICCRC</p>
            <p> Member of the CAPIC</p>
          </div>
          <div>
            <h3 className="font-bold">Important Links</h3>
            <a
              href={
                'https://college-ic.ca/protecting-the-public/find-an-immigration-consultant'
              }
              target="true"
              className="hover:underline block"
            >
              Verify RCIC
            </a>
            <a
              href={
                'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile.html'
              }
              target="true"
              className="hover:underline block"
            >
              Latest CRS Score
            </a>
            <a
              href={
                'https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp'
              }
              target="true"
              className="hover:underline block"
            >
              CRS Calculator
            </a>
            <a
              href={
                'https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html'
              }
              target="true"
              className="hover:underline block"
            >
              Check Processing Time
            </a>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <a href="tel:+16043686092" className="hover:underline block">
              +1 (604) 368-6092
            </a>
            <a
              href="mailto:arialimmagtion@gmail.com "
              className="hover:underline block"
            >
              arialimmagtion@gmail.com{' '}
            </a>
          </div>
          <Image src={rcic} alt={`Image for rcic logo`} width={350} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
