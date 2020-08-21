/** @jsx jsx */
import { Box, Flex, Heading, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import Man from '../../images/man';
import Conplus from '../../images/conplus';
import Clock from '../../images/clock';

const ContactForm: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  // @ts-ignore
  const onSubmit = (data) => console.log(data);

  console.log(watch('example'));
  return (
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 1110,
        padding: `0 1.0875rem 1.45rem`,
        display: 'grid',
        gridTemplateColumns: ['2fr 1.1fr'],
        gridTemplateRows: '1fr',
        gap: 4,
      }}
    >
      <div>
        <Flex
          sx={{
            display: 'block',
          }}
        >
          <Heading as={'h3'}>Let's work together.</Heading>
          <p sx={{ mt: '4px' }}>
            Fill the form, or contact us via hello@codivox.com{' '}
          </p>
        </Flex>
        <form
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr'],
            gridTtemplateRrows: ['1fr 1fr 1fr 1fr'],
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box>
            <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
              What's your name?*
            </label>
            <input
              sx={{
                background: 'rgba(20, 22, 51, 0.1)',
                height: '50px',
                width: '90%',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                display: 'block',
                mb: '20px',
              }}
              name="exampleRequired"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Box>
          <Box>
            <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
              What's your email?*
            </label>
            <input
              sx={{
                background: 'rgba(20, 22, 51, 0.1)',
                height: '50px',
                width: '90%',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                display: 'block',
              }}
              name="exampleRequired"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Box>
          <Box>
            <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
              Phone Number(Optional)
            </label>
            <input
              sx={{
                background: 'rgba(20, 22, 51, 0.1)',
                height: '50px',
                width: '90%',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                display: 'block',
                mb: '20px',
              }}
              name="exampleRequired"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Box>
          <Box>
            <label sx={{ fontWeight: 'bold', mb: 15, display: 'block' }}>
              Do you prefer we call or email you?
            </label>

            <label>
              <input
                type="radio"
                name="exampleRequired"
                ref={register({ required: true })}
              />
              Call
              {errors.exampleRequired && <span>This field is required</span>}
            </label>

            <label>
              <input
                type="radio"
                name="exampleRequired"
                ref={register({ required: true })}
              />
              Email
              {errors.exampleRequired && <span>This field is required</span>}
            </label>

            <label>
              <input
                type="radio"
                name="exampleRequired"
                ref={register({ required: true })}
              />
              Either
              {errors.exampleRequired && <span>This field is required</span>}
            </label>
          </Box>
          <Box>
            <label sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
              Tell us a little bit about your project.
            </label>
            <input
              sx={{
                background: 'rgba(20, 22, 51, 0.1)',
                height: '100px',
                width: '190%',
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 10px 0px rgba(20, 22, 51, 0.1)',
                display: 'block',
              }}
              type="text"
              name="exampleRequired"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </Box>
          <span></span>

          <Box sx={{ width: '150%', mt: '30px', mb: '101px' }}>
            <input
              type="submit"
              value="Send Message"
              sx={{ variant: 'buttons.prime', width: ['100%', 210] }}
            />
            <Link to="/" sx={{ color: '#6670FD', ml: '49.37px' }}>
              Privacy Policy{' '}
            </Link>
          </Box>
        </form>
      </div>

      <div sx={{}}>
        <ul
          sx={{
            textAlign: 'center',
            '& > *': {
              listStyle: 'none',
              lineHeight: 0.5,
              mb: '50px',
            },
          }}
        >
          <li>
            <Clock />
            <h4>Fast response</h4>
            <p>We'll get back to you next working day.</p>
          </li>
          <li>
            <Conplus />
            <h4>Consulting included</h4>
            <p>We need to sit down and get to know details.</p>
          </li>
          <li>
            <Man />
            <h4>Personalized offer</h4>
            <p
              sx={{
                lineHeight: 1.4,
              }}
            >
              We provide every offer from scratch to meet your specific needs.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
