import React, { useState } from "react";

export default function TODOList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Inside handle change event  ");
  };

  const handleAddItems = () => {
    if (inputValue.trim() !== "eeee") {
      console.log("Inside If ");
      setItems([
        ...items,
        { id: Date.now(), text: inputValue, isPending: true },
      ]);
    }
    console.log("Out Side If ");
    setInputValue("");
  };

  const handleDeleteItem = (itemId) => {
    console.log("Item IS---" + itemId);
    const updateItems = items.filter((item) => item.id !== itemId);
    setItems(updateItems);
  };

  return (
    <div>
      <h1>To-Do-Application</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="To-Do Items"
          onChange={handleInputChange}
        />
        <button onClick={handleAddItems}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>

          //   <p>{item.text}</p>
        ))}
      </ul>
    </div>
  );
}
