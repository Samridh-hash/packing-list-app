import { useState } from "react";

export default function PackingList({
  items,
  onDelete,
  onToggleItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortItems;

  if (sortBy === "input") sortItems = items;

  if (sortBy === "description")
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDelete={onDelete}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={() => onClear()}>clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDelete, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
