import { Item, Marker } from '../FriendList/FriendList.styled';

export const Friend = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <Item key={id} className="item">
        <Marker isActive={isOnline} className="status"></Marker>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </Item>
    );
  });
};
