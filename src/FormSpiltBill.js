import Button from "./Button";
export default function FormSpiltBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Spilt a Bill with {selectedFriend.name}</h2>

      <label>💵 Bill value</label>
      <input type="text" />

      <label>🧍🏽‍♀️ Your expense</label>
      <input type="text" />

      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>😀 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Spilt bill</Button>
    </form>
  );
}
