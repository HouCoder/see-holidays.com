'use client';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RegionSelect from "@/components/RegionSelect/RegionSelect";
import HolidaysInYear from "@/components/HolidaysInYear/HolidaysInYear";
import Calendar from "@/components/Calendar/Calendar";
import HolidayNote from "@/components/HolidayNote/HolidayNote";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className="col-lg-3 col-12">
          <RegionSelect />
          <HolidaysInYear />
          <HolidayNote />
        </Col>
        <Col className="col-lg-9 col-12">
          <Calendar />
          <div className="text-end my-3">
            <a
              className="text-body-tertiary fst-italic fs-6"
              href="https://forms.gle/QSAnrKbDnTtQcZbB7"
            >
              🙋 Report incorrect holiday
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
