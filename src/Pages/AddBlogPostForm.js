// AddBlogPostForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddBlogPostForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [imageLink, setImageLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      tag,
      imageLink,
    };
    onAdd(newPost);
    // Reset form fields after submission
    setTitle('');
    setDescription('');
    setTag('');
    setImageLink('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Blog Post Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="tag">
        <Form.Label>Tag</Form.Label>
        <Form.Control type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="imageLink">
        <Form.Label>Image Link</Form.Label>
        <Form.Control type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Post
      </Button>
    </Form>
  );
}

export default AddBlogPostForm;
