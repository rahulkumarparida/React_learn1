import Fruit from "./Fruit";

export default function Fruits() {
 const fruits = [
    { id: "AP", name: "Apple", price: 20 },
    { id: "MN", name: "Mango", price: 18 },
    { id: "BN", name: "Banana", price: 5 },
    { id: "GV", name: "Guava", price: 10 },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruits , idx) => {
          return (
            <Fruit key={fruits.id} name={fruits.name} price={fruits.price} index={idx} />
          );
        })}
      </ul>
    </div>
  );
}
