import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          alignItems="center" 
          spacing={4}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: '600px', ml: { xs: 2, md: 8 } }}>
              <Typography
                component={motion.div}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: '#fff',
                  mb: 1,
                  lineHeight: 1.2,
                  textAlign: 'left',
                }}
              >
                Hi, I am
              </Typography>
              <Typography
                component={motion.div}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                sx={{
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: '#fff',
                  mb: 3,
                  lineHeight: 1.2,
                  textAlign: 'left',
                }}
              >
                Sudhanshu Yadav
              </Typography>
              <Typography
                component={motion.div}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                sx={{
                  fontSize: '1rem',
                  color: '#aaa',
                  mb: 4,
                  maxWidth: '400px',
                  textAlign: 'left',
                }}
              >
                Crafting seamless digital experiences, from front-end finesse to back-end brilliance.
              </Typography>
              <Box
                component={motion.div}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  justifyContent: 'flex-start'
                }}
              >
                <Button
                  href="https://drive.google.com/file/d/1k5Cto1uvV1wZNyC6-6mJMvelTkGd5Ov7/view?usp=drive_link"
                  target="_blank"
                  variant="contained"
                  sx={{
                    backgroundColor: '#c8ff00',
                    color: '#000',
                    px: 4,
                    py: 1,
                    borderRadius: '50px',
                    '&:hover': {
                      backgroundColor: '#b3e600',
                    },
                  }}
                >
                  RESUME
                </Button>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    href="https://www.linkedin.com/in/sudhanshu-yadav-48099a227/"
                    target="_blank"
                    sx={{ minWidth: 'auto', color: '#fff' }}
                  >
                    <LinkedInIcon />
                  </Button>
                  <Button
                    href="https://github.com/SudhanshuAi"
                    target="_blank"
                    sx={{ minWidth: 'auto', color: '#fff' }}
                  >
                    <GitHubIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component={motion.div}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              sx={{
                width: { xs: '60%', md: '60%' },
                height: '400px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                },
              }}
            >
              <img 
                src={require('../assets/profile.png')} 
                alt="Sudhanshu Yadav" 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 