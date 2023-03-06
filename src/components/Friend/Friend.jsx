import PropTypes from 'prop-types';
import { Item, Marker } from '../FriendList/FriendList.styled';

export const Friend = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <Item key={id}>
        <Marker isActive={isOnline}></Marker>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </Item>
    );
  });
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
