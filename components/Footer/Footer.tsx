import Container from 'react-bootstrap/Container';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
    <footer className="border-top mt-6">
      <Container>
        <div className="d-flex flex-wrap justify-content-between py-3 text-body-tertiary fst-italic">
          <div>© {year} See Holidays. All rights reserved.</div>
          <div>
            Made with ❤️ by{" "}
            <a href="https://github.com/HouCoder" className="text-body-tertiary">
              Tonni
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
  };

export default Footer;
