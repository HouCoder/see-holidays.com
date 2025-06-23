import Container from 'react-bootstrap/Container';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-top mt-6">
      <Container>
        <div className="py-3 text-body-tertiary fst-italic">
          © {year} See Holidays. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
