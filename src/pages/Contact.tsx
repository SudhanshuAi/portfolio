import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        py: 8,
        background: '#000000',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 4 }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper
              component={motion.div}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              elevation={3}
              sx={{ 
                p: 3,
                background: '#000000',
                border: '1px solid #333',
              }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              component={motion.div}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              elevation={3}
              sx={{ 
                p: 3,
                background: '#000000',
                border: '1px solid #333',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Connect With Me
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 1 }} /> sudhanshu26uv@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  href="https://www.linkedin.com/in/sudhanshu-yadav-48099a227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': { backgroundColor: 'primary.dark' },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://github.com/SudhanshuAi"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': { backgroundColor: 'primary.dark' },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  href="https://x.com/sudhanshu7v"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': { backgroundColor: 'primary.dark' },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact; 