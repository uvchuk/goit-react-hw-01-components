import PropTypes from 'prop-types';
import { Container, Item, Marker } from './FriendList.styled';
import { Friend } from '../Friend/Friend';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <Friend friends={friends} item={Item} marker={Marker} />
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
