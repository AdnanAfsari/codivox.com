/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import moment from 'moment';
import { Author } from '../../types/blog';

interface AuthorInfoProps {
  date: string;
  author: Author;
  color: string;
}

const AuthorInfo = ({ author, date, color }: AuthorInfoProps) => {
  return (
    <Flex sx={{ alignItems: 'center' }}>
      <img
        alt=""
        src={author.node.avatar.url}
        sx={{ borderRadius: '50%', width: '48px', height: '48px' }}
      />
      <span sx={{ m: '20px', color: `${color}` }}>
        <span sx={{}}>{author.node.name}</span>
        <span sx={{ mx: '1rem' }}>&bull;</span>
        <span sx={{}}>{moment(date).format('MMM Do YYYY')}</span>
      </span>
    </Flex>
  );
};

export default AuthorInfo;
