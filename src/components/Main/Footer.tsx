/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Codivox from '../../images/codivox';

const Footer: React.FC = () => {
  return (
    <footer
      sx={{
        background: (theme) => `${theme.colors.footer}`,
        minHeight: '424px',
        display: 'block',
      }}
    >
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
                <Codivox />
                <span sx={{ ml: 2, color: 'text' }}>codivox</span>
                <span sx={{ color: (theme) => `${theme.colors.main}` }}>.</span>
              </Heading>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, at affert labitur signiferumque nec.
              Ea ius choro albucius appareat.
            </p>

            <Link
              to="/"
              sx={{ variant: 'styles.navlink', p: 2, textDecoration: 'none' }}
            >
              f
            </Link>
            <Link
              to="/"
              sx={{ variant: 'styles.navlink', p: 2, textDecoration: 'none' }}
            >
              In
            </Link>
            <Link
              to="/"
              sx={{ variant: 'styles.navlink', p: 2, textDecoration: 'none' }}
            >
              tw
            </Link>
            <Link
              to="/"
              sx={{ variant: 'styles.navlink', p: 2, textDecoration: 'none' }}
            >
              li
            </Link>
          </div>
          <div
          // sx={{
          //   ml: '3em',
          // }}
          >
            <h4>Services</h4>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              <Link
                to="/"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Web Application
              </Link>
              <Link
                to="/work"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Development Teams
              </Link>
              <Link
                to="/blog"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                MVP
              </Link>
              <Link
                to="/about"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Development
              </Link>
            </div>
          </div>

          <div>
            <h4>About Us</h4>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              <Link
                to="/"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                What we can do?
              </Link>
              <Link
                to="/work"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Team
              </Link>
              <Link
                to="/blog"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                FAQ
              </Link>
              <Link
                to="/about"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                How we work
              </Link>
              <Link
                to="/products"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Careers
              </Link>
              <Link
                to="/community"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4>Blog</h4>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              <Link
                to="/"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                News
              </Link>
              <Link
                to="/work"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Technology
              </Link>
              <Link
                to="/blog"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Case Study
              </Link>
            </div>
          </div>

          <div>
            <h4>Get Estimate</h4>
            <div
              sx={{
                display: 'grid',
                gap: 2,
              }}
            >
              <Link
                to="/"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Testimonials
              </Link>
              <Link
                to="/work"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Solutions
              </Link>
              <Link
                to="/blog"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Price
              </Link>
              <Link
                to="/about"
                sx={{ variant: 'styles.navlink', textDecoration: 'none' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Box>
      </div>
      <div
        sx={{
          textAlign: 'center',
          mt: '80px',
        }}
      >
        All rights reserved by ©Codivox {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
