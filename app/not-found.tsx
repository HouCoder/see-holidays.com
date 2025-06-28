import Link from 'next/link';
import Container from 'react-bootstrap/Container';

export default function NotFound() {
  return (
    <Container>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
