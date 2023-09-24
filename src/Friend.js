import Button from "./Button";

export default function Friend({ friendobj, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friendobj.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friendobj.image} alt={friendobj.name} />
      <h3>{friendobj.name}</h3>

      {friendobj.balance < 0 && (
        <p className="red">
          You owe {friendobj.name} {Math.abs(friendobj.balance)}$
        </p>
      )}
      {friendobj.balance > 0 && (
        <p className="green">
          {friendobj.name} owes you {Math.abs(friendobj.balance)}$
        </p>
      )}
      {friendobj.balance === 0 && <p>You and {friendobj.name} are even</p>}

      <Button onClick={() => onSelection(friendobj)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}
