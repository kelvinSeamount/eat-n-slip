import Friend from "./Friend";
export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friendobj={friend} key={friend.id} />
      ))}
    </ul>
  );
}
