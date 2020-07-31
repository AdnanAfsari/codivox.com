/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';

import { Link } from 'gatsby';
import CodivoxWhite from '../../images/codivox-white';
import Linkedin from '../../images/linkedin';
import Fb from '../../images/fb';
import Twitter from '../../images/twitter';
import Insta from '../../images/insta';
import Dots from '../../images/dots';

const Footer: React.FC = () => {
  const footerSubtitle =
    'We’re team of developers and designers specialized in building quality web and mobile apps';
  const services = [
    {
      content: 'Web Application',
      link: 'home',
    },
    {
      content: 'Development Teams',
      link: 'home',
    },
    {
      content: 'MVP',
      link: 'home',
    },
    {
      content: 'Development',
      link: 'home',
    },
  ];
  const aboutUs = [
    {
      content: 'What can we do?',
      link: 'home',
    },
    {
      content: 'How we work',
      link: 'home',
    },
    {
      content: 'Careers',
      link: 'home',
    },
    {
      content: 'Contact',
      link: 'home',
    },
  ];
  const blog = [
    {
      content: 'News',
      link: 'home',
    },
    {
      content: 'Technology',
      link: 'home',
    },
    {
      content: 'Case Study',
      link: 'home',
    },
  ];
  const estimate = [
    {
      content: 'Testimonials',
      link: 'home',
    },
    {
      content: 'Solutions',
      link: 'home',
    },
    {
      content: 'Price',
      link: 'home',
    },
    {
      content: 'Contact Us',
      link: 'home',
    },
  ];

  return (
    <footer
      sx={{
        background: (theme) => `${theme.colors.footer}`,
        minHeight: '424px',
        display: 'block',
        position: 'absolute',
        width: '100%',
      }}
    >
      <div sx={{ position: 'absolute', right: 10, bottom: 10 }}>
        <Dots />
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: 1110,
            display: 'grid',
            gridTemplateColumns: ['2fr 1fr 1fr 1fr 1fr'],
            gridTemplateRows: '1fr',
            gap: 5,
            mt: '4em',
          }}
        >
          <div
            sx={{
              mt: '1em',
            }}
          >
            <Link to="/" sx={{ textDecoration: 'none' }}>
              <Heading sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <CodivoxWhite />
                <span sx={{ ml: 2, color: 'text' }}>codivox</span>
                <span sx={{ color: (theme) => `${theme.colors.main}` }}>.</span>
              </Heading>
            </Link>
            <p sx={{ opacity: '0.85' }}>{footerSubtitle}</p>

            <Link
              to="https://facebook.com/codivox"
              target="_blank"
              rel="noreferrer"
              sx={{ p: 2, pl: 0, textDecoration: 'none' }}
            >
              <Fb />
              <span
                sx={{
                  fontSize: '0 !important',
                  height: 1,
                  overflow: 'hidden',
                }}
              >
                Facebook
              </span>
            </Link>
            <Link
              to="https://twitter.com/codivox"
              target="_blank"
              rel="noreferrer"
              sx={{ p: 2, textDecoration: 'none' }}
            >
              <Twitter />
              <span
                sx={{
                  fontSize: '0 !important',
                  height: 1,
                  overflow: 'hidden',
                }}
              >
                Twitter
              </span>
            </Link>
            <Link
              to="https://instagram.com/codivox"
              target="_blank"
              rel="noreferrer"
              sx={{ p: 2, textDecoration: 'none' }}
            >
              <Insta />
              <span
                sx={{
                  fontSize: '0 !important',
                  height: 1,
                  overflow: 'hidden',
                }}
              >
                Instagram
              </span>
            </Link>
            <Link
              to="https://linkedin.com/company/codivox"
              target="_blank"
              rel="noreferrer"
              sx={{ p: 2, textDecoration: 'none' }}
            >
              <Linkedin />
              <span
                sx={{
                  fontSize: '0 !important',
                  height: 1,
                  overflow: 'hidden',
                }}
              >
                Linkedin
              </span>
            </Link>
          </div>
          <div>
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              Services
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {services.map((service) => {
                const { content, link } = service;
                return (
                  <Link
                    to={link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              About Us
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {aboutUs.map((about) => {
                const { content, link } = about;
                return (
                  <Link
                    to={link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              Blog
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {blog.map((blog) => {
                const { content, link } = blog;
                return (
                  <Link
                    to={link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <Heading as={'h4'} sx={{ mt: '2rem', mb: '1rem' }}>
              Get Estimate
            </Heading>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              {estimate.map((est) => {
                const { content, link } = est;
                return (
                  <Link
                    to={link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'text',
                      opacity: '0.85',
                      fontSize: '14px',
                    }}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </Box>
      </div>
      <div
        sx={{
          textAlign: 'center',
          mt: '80px',
          opacity: '0.8',
          fontSize: '14px',
        }}
      >
        All rights reserved by © codivox {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
