// UpdateEventForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function UpdateEventForm({ event, onUpdate }) {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [tag, setTag] = useState(event.tag);
  const [posterLink, setPosterLink] = useState(event.posterLink);
  const [eventMonth, setEventMonth] = useState(event.eventMonth);
  const [eventDay, setEventDay] = useState(event.eventDay);
  const [eventTime, setEventTime] = useState(event.eventTime);
  const [coordinator, setCoordinator] = useState(event.coordinator);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      id: event.id, // Assuming each event has an ID
      title,
      description,
      tag,
      posterLink,
      eventMonth,
      eventDay,
      eventTime,
      coordinator,
    };
    onUpdate(updatedEvent);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Event Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Event Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="tag">
        <Form.Label>Event Tag</Form.Label>
        <Form.Control type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="posterLink">
        <Form.Label>Poster Link</Form.Label>
        <Form.Control type="text" value={posterLink} onChange={(e) => setPosterLink(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="eventMonth">
        <Form.Label>Event Month</Form.Label>
        <Form.Control type="text" value={eventMonth} onChange={(e) => setEventMonth(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="eventDay">
        <Form.Label>Event Day</Form.Label>
        <Form.Control type="text" value={eventDay} onChange={(e) => setEventDay(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="eventTime">
        <Form.Label>Event Time</Form.Label>
        <Form.Control type="text" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="coordinator">
        <Form.Label>Event Coordinator</Form.Label>
        <Form.Control type="text" value={coordinator} onChange={(e) => setCoordinator(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Event
      </Button>
    </Form>
  );
}

export default UpdateEventForm;
