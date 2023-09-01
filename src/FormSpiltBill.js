import Button from "./Button";
export default function FormSpiltBill() {
  return (
    <form className="form-split-bill">
      <h2>Spilt a Bill with X</h2>

      <label>💵 Bill value</label>
      <input type="text" />

      <label>🧍🏽‍♀️ Your expense</label>
      <input type="text" />

      <label>👫 X's expense</label>
      <input type="text" disabled />

      <label>😀 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Spilt bill</Button>
    </form>
  );
}
