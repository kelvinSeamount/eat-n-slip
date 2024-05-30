import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  //USE OF CONTROLLED ELEMENTS
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  //LISTEN FOR ONSUBMIT EVENT
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image} ?={id}`,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend Name</label>
      <input
        type="text"
        value={name}
        //USE OF EVENT.TARGET VALUE
        onChange={(e) => setName(e.target.value)}
      />

      <label>👨🏾‍💻 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
