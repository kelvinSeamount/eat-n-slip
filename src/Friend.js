import Button from "./Button";

export default function Friend({ friendobj }) {
  return (
    <li>
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

      <Button>Select</Button>
    </li>
  );
}
