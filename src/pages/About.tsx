import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 75 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'Docker', level: 90 },
];

const About = () => {
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
        py: 8,
        pt: { xs: 8, md: 12 },
        background: '#000000',
      }}
    >
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 0 } }}>
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            mb: 3,
            color: '#fff',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600
          }}
        >
          About Me
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              elevation={3}
              sx={{ 
                p: 3,
                height: '100%',
                background: '#000000',
                border: '1px solid #333'
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: '#fff' }}>
                Who I Am
              </Typography>
              <Typography paragraph sx={{ color: '#aaa', fontSize: '0.95rem' }}>
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
                I love creating efficient, scalable, and user-friendly solutions to complex problems.
              </Typography>
              <Typography paragraph sx={{ color: '#aaa', fontSize: '0.95rem' }}>
                With several years of experience in web development, I've worked on various projects
                ranging from small business websites to large-scale enterprise applications.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              elevation={3}
              sx={{ 
                p: 3,
                height: '100%',
                background: '#000000',
                border: '1px solid #333'
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, color: '#fff' }}>
                Skills
              </Typography>
              {skills.map((skill) => (
                <Box key={skill.name} sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1, color: '#aaa' }}>
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: 'rgba(200, 255, 0, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 3,
                        backgroundColor: '#c8ff00',
                      },
                    }}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 