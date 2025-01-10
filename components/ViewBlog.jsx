'use client'

import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';

const ViewBlogs = () => {s

  // Simulate some sample blog data for design purposes
  const blogs = [
    {
      id: '1',
      title: 'Understanding React and Next.js',
      excerpt: 'A deep dive into the world of React and how Next.js is used to enhance React development...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: '2',
      title: 'Material-UI Design Tips',
      excerpt: 'Learn how to use Material-UI to build beautiful and responsive web applications...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: '3',
      title: 'Introduction to Web Development',
      excerpt: 'A beginner’s guide to understanding the fundamentals of web development, from HTML to CSS...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: '4',
      title: 'Next.js Routing and APIs',
      excerpt: 'Explore how Next.js makes routing easy and provides powerful API routes for your applications...',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <Container sx={{ paddingTop: 4 }}>
      {/* Page Heading */}
      <Typography variant="h4" sx={{ marginBottom: 4, color: '#00796b', fontWeight: 'bold' }}>
        View Blogs
      </Typography>

      {/* Blog Cards Grid */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card sx={{
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': { boxShadow: 6, transform: 'translateY(-5px)', transition: 'all 0.3s ease-in-out' }
            }}>
              {/* Blog Image */}
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                sx={{
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  objectFit: 'cover',
                }}
              />
              {/* Blog Content */}
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                  {blog.excerpt}
                </Typography>
                {/* Button */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#00796b',
                      color: 'white',
                      '&:hover': { backgroundColor: '#004d40' },
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ViewBlogs;
