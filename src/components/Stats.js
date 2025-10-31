export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some itenms to your packing list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.reduce(
    (count, item) => count + (item.packed ? 1 : 0),
    0
  );
  const percentPacked = isNaN(packedItems / totalItems)
    ? 0
    : Math.round((packedItems / totalItems) * 1000) / 10;
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
