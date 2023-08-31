import Friend from "./Friend";
export default function FriendsList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friendobj={friend} key={friend.id} />
      ))}
    </ul>
  );
}
