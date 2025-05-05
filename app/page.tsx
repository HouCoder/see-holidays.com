'use client';
import Image from "next/image";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RegionSelect from "./components/RegionSelect/RegionSelect";
import HolidaysInYear from "./components/HolidaysInYear/HolidaysInYear";
import Calendar from "./components/Calendar/Calendar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Container>
    <Row>
      <Col className="col-lg-3 col-12">
        <RegionSelect />
        <HolidaysInYear />
      </Col>
      <Col className="col-lg-9 col-12">
        <Calendar />
      </Col>
    </Row>
    </Container>
  );
}
