import FriendsList from "./FriendsList";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FormSpiltBill from "./FormSpiltBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showFormAddFriend, setshowFormAddFriend] = useState(false);
  function handleShowAddFriend() {
    setshowFormAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={initialFriends} />
        {showFormAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showFormAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSpiltBill />
    </div>
  );
}
