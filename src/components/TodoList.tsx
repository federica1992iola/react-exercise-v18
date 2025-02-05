import React, { useState } from "react";

// ✅ Definizione del tipo per ogni elemento della lista
interface ListItem {
  title: string;
  completed: boolean;
}

export const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<ListItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
        setItems([...items, { title: inputValue, completed: false }]);
        setInputValue("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const completeItem = (index: number) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: true } : item
    );
    setItems(updatedItems);
    console.log("Array aggiornato:", updatedItems);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Aggiungi un elemento..."
      />
      <button onClick={addItem}>Aggiungi</button>
      <p>Totale elementi: {items.length}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
              {item.title}
            </span>
            <button onClick={() => removeItem(index)} style={{ marginLeft: "10px" }}>
              Rimuovi
            </button>
            <button onClick={() => completeItem(index)} style={{ marginLeft: "10px" }}>
              Completa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};