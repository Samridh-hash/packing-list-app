import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleNewItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleOnDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleOnClear() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItems} />
      <PackingList
        items={items}
        onDelete={handleOnDelete}
        onToggleItem={onToggleItem}
        onClear={handleOnClear}
      />
      <Stats items={items} />
    </div>
  );
}
