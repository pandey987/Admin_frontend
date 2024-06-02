// BlogPost.js

import React from 'react';
import { Card } from 'react-bootstrap';

function BlogPost() {
  let data = {
    id: 1,
    title: 'First Blog Post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in leo massa.',
    tag: 'Tech',
    imageLink: 'https://images.unsplash.com/photo-1530041539828-114de669390e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
  return (
    <Card style={{marginTop : "22px"}}>
      {/* Image */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* Image */}
    <Card.Img
      variant="top"
      src={data.imageLink}
      alt={data.title}
      style={{ width: '600px', height: '400px' }} // Adjust width and height as needed
    />
  </div>

      <Card.Body>
        {/* Title */}
        <Card.Title>{data.title}</Card.Title>

        {/* Tag */}
        <Card.Text>Tag: {data.tag}</Card.Text>

        {/* Description */}
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogPost;
