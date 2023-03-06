import PropTypes from 'prop-types';
import { Container, Item, List } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
