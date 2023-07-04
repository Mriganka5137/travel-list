import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault(); //-----------Prevent the default behaviour

    // console.log(e);
    // To get the data from the form we collect itfrom the onSubmit function
    // if (!description) return;
    const newItem = { description, quantity, isPacked: false, id: Date.now() };
    // console.log(initialItems);
    onAddItems(newItem);

    //It is important to update the form to initial state using seting function
    setDescription("");
    setQuantity(1);
  }

  //we can convert a string to number by placing a '+' sign before the string
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="input..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
