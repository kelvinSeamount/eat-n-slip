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
  //UseState new friend form
  const [showFormAddFriend, setshowFormAddFriend] = useState(false);

  //UseState to  add new friend
  const [friends, setFriends] = useState(initialFriends);

  //UseState for the form bill
  const [selectedFriend, setSelectedFriend] = useState(false);

  //To display Show form friend
  function handleShowAddFriend() {
    setshowFormAddFriend((show) => !show);
  }

  //To display New friend
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setshowFormAddFriend(false);
  }

  //To display the form bill
  function handleSelection(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setshowFormAddFriend(false);
  }

  //IMPLEMENT SPLITBILL
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        {/*Passing  the friends props*/}
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {/*Render the Showform friend*/}
        {showFormAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        {/*Updating state for Show form friend */}
        <Button onClick={handleShowAddFriend}>
          {showFormAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSpiltBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
