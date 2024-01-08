export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> start adding items in the list😍</em>
      </p>
    );
  const newItem = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / newItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything!, Ready to go 🛩️"
          : `🎒you have ${newItem} item on your list and you have already packed
          ${packedItems}(${percentage}%)`}
      </em>
    </footer>
  );
}
