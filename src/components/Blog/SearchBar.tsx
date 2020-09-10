/** @jsx jsx */
import { jsx, Heading, Flex } from 'theme-ui';
import { Fragment } from 'react';

const SearchBar = (props: any) => {
  return (
    <Fragment>
      <div
        sx={{
          border: (theme) => `1px solid ${theme.colors.gray[3]}`,
          borderRadius: '10px',
        }}
      >
        Search..
        <ul
          sx={{
            '& > *': {
              listStyle: 'none',
              py: '7px',
            },
          }}
        >
          <li>ALL</li>
          <li>AWS</li>
          <li>Angular</li>
          <li>General</li>
          <li>GraphQL</li>
          <li>Javascript</li>
          <li>Other</li>
          <li>React JS</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SearchBar;
