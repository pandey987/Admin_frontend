// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Login from './Pages/Login';
import EventForm from './Pages/EventForm';
import UpdateEventForm from './Pages/UpdateEventForm';
import BlogPost from './Pages/BlogPost';
import AddBlogPostForm from './Pages/AddBlogPostForm';
import AppNavbar from './Navbar';



function App() {
 
  const [blogPosts, setBlogPosts] = useState([
    // Dummy data for testing
    {
      id: 1,
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo massa.',
      tag: 'Tech',
      imageLink: 'https://via.placeholder.com/300',
    }
  ]);
  const handleAddPost = (newPost) => {
    // Generate a unique ID for the new post
    newPost.id = Date.now();
    setBlogPosts([...blogPosts, newPost]);
  };
  const [events, setEvents] = useState([
    // Dummy data for testing
    {
      id: 2,
      title: 'Event 2',
      description: 'Description for Event 2',
      tag: 'Tag 2',
      posterLink: 'https://example.com/poster2.jpg',
      eventMonth: 'February',
      eventDay: '15',
      eventTime: '2:00 PM',
      coordinator: 'Coordinator 2',
    },
  ]);

  const handleUpdateEvent = (updatedEvent) => {
    // Update the event in the events array
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return { ...event, ...updatedEvent };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (<>


<Router>
  <div>
  <AppNavbar />
  <Container>
    <Routes>
    <Route path="/event-form" element={<EventForm />} />
    <Route path="/update-event-form" element={<UpdateEventForm event={events} handleUpdateEvent={handleUpdateEvent} />} />
            <Route path="/add-blog-post" element={<AddBlogPostForm blogPosts={blogPosts}/>} />
            <Route path="/show-blog-post" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
    </Routes>
  </Container>
  </div>
</Router>

    {/* <div className="App">
      <Login />
    </div>

   <Container>
      <h1>Add Event</h1>
      <EventForm />
    </Container>


<Container>
      <h1>Update Events</h1>
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={4}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <UpdateEventForm event={event} onUpdate={handleUpdateEvent} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

<Container>
      <h1>My Blog</h1>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post.id} md={4}>
            <BlogPost
              title={post.title}
              description={post.description}
              tag={post.tag}
              imageLink={post.imageLink}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <h2>Add New Blog Post</h2>
          <AddBlogPostForm onAdd={handleAddPost} />
        </Col>
      </Row>
    </Container> */}


    </>
  );
}

export default App;
