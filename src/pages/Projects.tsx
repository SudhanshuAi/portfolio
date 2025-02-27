import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

interface ProjectInfo {
  year: string;
  role: string;
  client?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  projectInfo: ProjectInfo;
  demoLink: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: 'Budget Tracker',
    description: 'A financial management platform built using Next.js, PostgreSQL, and Prisma ORM, enabling users to efficiently track their expenses and categorize transactions. The app improved financial insights through historical data aggregation and optimized database efficiency. Enhanced authentication with Clerk and interactive data visualization using Recharts, boosting user engagement.',
    image: require('../assets/project1.png'),
    category: 'Full Stack',
    projectInfo: {
      year: '2025',
      role: 'Next.js, ShadcnUI, PostgreSQL',
    },
    demoLink: 'https://budget-tracker-green-two.vercel.app/',
    githubLink: 'https://github.com/SudhanshuAi/Budget_Tracker',
  },
  {
    title: 'Evently',
    description: 'A comprehensive event management platform developed with Next.js, TypeScript, and MongoDB, offering secure authentication via Clerk and seamless event categorization. Integrated Stripe for secure payments with a 99% success rate, while optimizing event discovery. The scalable code architecture improved overall system efficiency, ensuring smooth user experiences.',
    image: require('../assets/project2.png'),
    category: 'Full Stack',
    projectInfo: {
      year: '2024',
      role: 'Next.js, TailwindCSS, MongoDB',
    },
    demoLink: 'https://event-organisation-app.vercel.app/',
    githubLink: 'https://github.com/SudhanshuAi/Event_Organisation_App',
  },
  {
    title: 'Real Estate App',
    description: 'A MERN-stack-based real estate platform facilitating property listing, searching, renting, and purchasing. Designed and implemented advanced filtering for location, price, and property type to enhance user experience. Developed a responsive UI and optimized APIs for seamless interaction and secure authentication, ensuring a smooth real estate booking experience',
    image: require('../assets/project3.png'),
    category: 'Full Stack',
    projectInfo: {
      year: '2024',
      role: 'React, Node.js, MongoDB',
    },
    demoLink: 'https://drive.google.com/file/d/1mDbSHy78uIcPUEVam3Vl63MEKqzD_SXB/view?usp=drive_link',
    githubLink: 'https://github.com/SudhanshuAi/Real_Estate',
  },
];

const Projects = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: 8,
        background: '#000000',
        pt: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component={motion.h1}
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontWeight: 700,
            color: '#fff',
            mb: 2,
          }}
        >
          FEATURED PROJECTS
        </Typography>
        <Typography
          component={motion.p}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{
            color: '#aaa',
            mb: 4,
            fontSize: '1rem',
          }}
        >
          Here are some of the selected projects that showcase my passion for Full Stack development
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={project.title}>
              <Card
                component={motion.div}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  background: '#000000',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={5} sx={{
                    borderRight: '1px solid #333',
                    backgroundColor: '#111111',
                  }}>
                    <Box
                      onClick={() => window.open(project.demoLink, '_blank')}
                      sx={{
                        width: '100%',
                        height: { xs: '300px', md: '400px' },
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 4,
                        cursor: 'pointer',
                        '& img': {
                          width: '100%',
                          height: 'auto',
                          maxHeight: '90%',
                          objectFit: 'contain',
                          borderRadius: 1,
                          margin: 'auto',
                          transition: 'transform 0.3s ease-in-out',
                        },
                        '&:hover img': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <img src={project.image} alt={project.title} />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Box sx={{ p: { xs: 2, md: 2.5 } }}>
                      <Chip
                        label={project.category}
                        sx={{
                          backgroundColor: 'rgba(200, 255, 0, 0.1)',
                          color: '#c8ff00',
                          mb: 1.5,
                          height: '24px',
                        }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#fff',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#aaa',
                          mb: 2,
                          lineHeight: 1.4,
                          fontSize: '0.95rem',
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box sx={{ mb: 5 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#fff',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            mb: 1.5,
                          }}
                        >
                          PROJECT INFO
                        </Typography>
                        <Grid container spacing={1}>
                          {project.projectInfo.client && (
                            <Grid item xs={12}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', py: 0.5 }}>
                                <Typography sx={{ color: '#aaa', fontSize: '0.9rem' }}>Client</Typography>
                                <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>{project.projectInfo.client}</Typography>
                              </Box>
                            </Grid>
                          )}
                          <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', py: 0.5 }}>
                              <Typography sx={{ color: '#aaa', fontSize: '0.9rem' }}>Year</Typography>
                              <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>{project.projectInfo.year}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', py: 0.5 }}>
                              <Typography sx={{ color: '#aaa', fontSize: '0.9rem' }}>Tech</Typography>
                              <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>{project.projectInfo.role}</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          href={project.demoLink}
                          target="_blank"
                          startIcon={<LaunchIcon sx={{ color: '#c8ff00' }} />}
                          sx={{
                            backgroundColor: 'transparent',
                            color: '#c8ff00',
                            px: 2,
                            py: 0.75,
                            fontSize: '0.875rem',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px',
                            '&:hover': {
                              backgroundColor: 'transparent',
                              opacity: 0.8,
                            },
                          }}
                        >
                          LIVE DEMO
                        </Button>
                        {project.githubLink && (
                          <Button
                            href={project.githubLink}
                            target="_blank"
                            startIcon={<GitHubIcon sx={{ color: '#c8ff00' }} />}
                            sx={{
                              backgroundColor: 'transparent',
                              color: '#c8ff00',
                              px: 2,
                              py: 0.75,
                              fontSize: '0.875rem',
                              textDecoration: 'underline',
                              textUnderlineOffset: '4px',
                              '&:hover': {
                                backgroundColor: 'transparent',
                                opacity: 0.8,
                              },
                            }}
                          >
                            SEE ON GITHUB
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Frontend Projects Section */}
        <Box sx={{ mt: 16, mb: 8 }}>
          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 600,
              color: '#fff',
              mb: 4,
            }}
          >
            Frontend Projects
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Food Cart',
                image: require('../assets/front1.png'),
                demoLink: 'https://food-cart-lake.vercel.app/'
              },
              {
                title: 'Banking Page',
                image: require('../assets/front2.png'),
                demoLink: 'https://banking-app-zeta-seven.vercel.app/'
              },
              {
                title: 'Dashboard',
                image: require('../assets/front3.png'),
                demoLink: 'https://rbac-ui-xi-eight.vercel.app/'
              }
            ].map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={project.title}>
                <Box
                  component={motion.div}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => window.open(project.demoLink, '_blank')}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '250px',
                      borderRadius: 2,
                      overflow: 'hidden',
                      backgroundColor: '#111111',
                      mb: 2,
                      '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      },
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <img src={project.image} alt={project.title} />
                  </Box>
                  <Typography
                    sx={{
                      color: '#c8ff00',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      textAlign: 'center',
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 