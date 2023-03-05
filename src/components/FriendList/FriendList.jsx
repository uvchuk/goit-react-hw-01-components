import friends from '../../friends.json';
import { Container, Item, Marker } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <Container className="friend-list">
      <FriendListItem friends={friends} item={Item} marker={Marker} />
    </Container>
  );
};
