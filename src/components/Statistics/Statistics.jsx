import PropTypes from 'prop-types';
import { Container, Item, List } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      <h2 className="title">{title}</h2>
      <List className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} className="item">
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
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
