import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelectedEventStore } from '@/stores/useSelectedEventStore';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};

const HolidayNote = ({ show, setShow }: Props) => {
  const selectedEvent = useSelectedEventStore((state) => state.selectedEvent);

  if (!selectedEvent) {
    return null;
  }

  const extendedProps = selectedEvent.extendedProps || {};

  if (!extendedProps.description) {
    return null;
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedEvent.extendedProps?.flag}{' '}
          {selectedEvent.extendedProps?.regionName} / {selectedEvent.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedEvent.extendedProps?.description ||
          'No description for this holiday'}
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="w-100"
          variant="secondary"
          onClick={() => setShow(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HolidayNote;
