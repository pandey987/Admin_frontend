// EventForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [posterLink, setPosterLink] = useState('');
  const [eventMonth, setEventMonth] = useState('');
  const [eventDay, setEventDay] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [coordinator, setCoordinator] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      description,
      tag,
      posterLink,
      eventMonth,
      eventDay,
      eventTime,
      coordinator,
    });
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
        Add Event
      </Button>
    </Form>
  );
}

export default EventForm;
