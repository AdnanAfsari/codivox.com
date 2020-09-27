/** @jsx jsx */
import { jsx } from 'theme-ui';

const SearchBar = () => {
  return (
    <div
      sx={{
        backgroundColor: 'white',
        border: (theme) => `1px solid ${theme.colors.gray[3]}`,
        borderRadius: '10px',
        paddingBottom: '50px',
      }}
    >
      <input
        sx={{
          margin: '40px',
          fontSize: 'inherit',
          py: '0.5rem',
          border: 'unset',
          borderBottom: (theme) => `1px solid ${theme.colors.main}`,
        }}
        placeholder="Search"
      ></input>
      <ul
        sx={{
          '& > *': {
            listStyle: 'none',
            py: '10px',
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
  );
};

export default SearchBar;
